import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
    FormsModule    
  ],
  providers: []
})
export class RegistrationModule {}