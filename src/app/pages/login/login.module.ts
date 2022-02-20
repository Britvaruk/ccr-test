import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
];

@NgModule({
  declarations: [  
    LoginComponent
  ],
  imports: [    
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class LoginModule {}