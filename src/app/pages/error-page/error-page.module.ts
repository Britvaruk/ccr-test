import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ErrorPageComponent } from './error-page.component';

const routes: Routes = [
  { path: '', component: ErrorPageComponent },
];

@NgModule({
  declarations: [  
    ErrorPageComponent
  ],
  imports: [    
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule    
  ],
  providers: []
})
export class ErrorPageModule {}