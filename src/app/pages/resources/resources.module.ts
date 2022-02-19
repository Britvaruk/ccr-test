import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResourcesComponent } from './resources.component';
import { ResourceComponent } from './resource/resource.component';

const routes: Routes = [
  { path: '', component: ResourcesComponent },
];

@NgModule({
  declarations: [  
    ResourcesComponent,
    ResourceComponent
  ],
  imports: [    
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule    
  ],
  providers: []
})
export class ResourcesModule {}