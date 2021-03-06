import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration.component';

const routes: Routes = [
  { path: '', component: RegistrationComponent },
];

@NgModule({
  declarations: [  
    RegistrationComponent
  ],
  imports: [    
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class RegistrationModule {}