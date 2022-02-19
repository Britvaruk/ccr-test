import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { User } from 'src/app/core/services/user-list.service';

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
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void { 
    this.route.data.subscribe(data => {
      this.user = data['user'].data;
    })       
  }

  editUser() {
    if (this.editMode === true) {
      for (let el of this.inputsRef) {      
        el.nativeElement.disabled = true;
        el.nativeElement.style.border = 'none';
      }

      this.userListApi.editUser(7, this.user).subscribe(response => {
        this.user = response.data;
      })
    } else {
      for (let el of this.inputsRef) {      
        el.nativeElement.disabled = false;
        el.nativeElement.style.border = '1px solid black';
      }
    }
       
    this.changeMod();
  }

  changeMod() {
    this.editMode = !this.editMode;

    if (this.editMode === true) {
      this.buttonText = 'Сохранить';
    } else {
      this.buttonText = 'Редактировать';
    }
  }
}