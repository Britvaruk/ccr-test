import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/core/interfaces/login.interface';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;
  error = false;

  get email() {
    return this.form.get('email')
  }
  get password() {
    return this.form.get('password')
  }

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private regApi: ApiService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [
        Validators.required, Validators.email
      ]],
      password: [null, [
        Validators.required, Validators.minLength(6)
      ]]
    })
  }

  submit() {
    const user: UserLogin = {
      email: this.email?.value,
      password: this.password?.value
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
