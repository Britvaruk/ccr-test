import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { UserListService } from 'src/app/core/services/user-list.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(public userListService: UserListService,
    private userListApi: ApiService) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.userListService.userList = 
    this.userListApi.fetchUserList().pipe(
      map(response => response.data)
    )
  }

  deleteUser(id: number) {
    this.userListApi.removeUser(id)
    .subscribe(() => {   
      this.userListService.userList = 
      this.userListService.userList!.pipe(
        map(el => el.filter(el => el.id !== id))
      )      
    })
  }
}
