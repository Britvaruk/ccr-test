import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/core/interfaces/login.interface';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public form!: FormGroup;
  error = false;

  get email() {
    return this.form.get('email')
  }
  get password() {
    return this.form.get('password')
  }
  get passwordConfirmation() {
    return this.form.get('passwordConfirmation')
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
      ]],
      passwordConfirmation: [null, [
        Validators.required, this.confirmationValidator
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

      this.regApi.registration(user).subscribe({
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

  confirmationValidator = (control: FormControl): {[key: string]: boolean} => {
    if (!control.value) {
      return {required: true};
    }
    if (control.value !== this.password?.value) {
      return {confirm: true, passwordDontMatch: true};
    }
    return {};
  };

}
