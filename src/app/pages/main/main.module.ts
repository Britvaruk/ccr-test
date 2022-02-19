import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: MainComponent, children: [    
    {
      path: 'users',
      loadChildren: () => import('../users/users.module').then(m => m.UsersModule)
    },
    {
      path: 'resources',
      loadChildren: () => import('../resources/resources.module').then(m => m.ResourcesModule)
    }
  ]}
];

@NgModule({
  declarations: [
    MainComponent    
  ],
  imports: [    
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,    
    HttpClientModule    
  ],
  providers: []
})
export class MainModule {}