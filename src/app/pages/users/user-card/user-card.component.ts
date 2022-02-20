import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/core/interfaces/user.interface';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  user!: User;
  editMode = false;
  buttonText = 'Редактировать';

  @ViewChildren('input') inputsRef!: ElementRef[];

  constructor(private userListApi: ApiService,
    private route: ActivatedRoute) { }

  ngOnInit(): void { 
    this.route.data.subscribe(response => {
      this.user = response['user'].data;
    })       
  }

  editUser() {
    if (this.editMode) {    
      this.userListApi.editUser(this.user.id!, this.user).subscribe(response => {
        this.user = response.data;
      })
    }
       
    this.changeMod();
  }

  changeMod() {
    this.editMode = !this.editMode;

    if (this.editMode) {
      this.buttonText = 'Сохранить';
    } else {
      this.buttonText = 'Редактировать';
    }
  }
}