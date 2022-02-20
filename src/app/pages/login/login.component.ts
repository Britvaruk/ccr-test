import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { UserLogin } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;
  error = false;

  constructor(private router: Router,
    private regApi: ApiService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required, Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required, Validators.minLength(6)
      ])
    })
  }

  submit() {
    const user: UserLogin = {
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value
    }

    if (this.form.valid) {
      this.form.reset();

      this.regApi.login(user).subscribe({
        next: resp => {
          console.log(resp.token);
          this.error = false;        
          localStorage.setItem('auth_token', resp.token);  
          this.router.navigate(['/']);
        },
        error: err => {
          console.log(err.message);
          this.error = true;
        }
      })
    }
  }
}
