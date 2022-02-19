import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsersComponent } from './users.component';
import { UserComponent } from './user/user.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserResolver } from 'src/app/core/resolvers/user.resolver';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { 
    path: ':id', 
    component: UserCardComponent,
    resolve: {
      user: UserResolver
    }
  }
];

@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserCardComponent,
  ],
  imports: [    
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule    
  ],
  providers: []
})
export class UsersModule {}