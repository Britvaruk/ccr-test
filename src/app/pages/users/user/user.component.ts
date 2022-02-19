import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/core/services/user-list.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user!: User;
  @Output() onRemove = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteUser() {
    this.onRemove.emit(this.user.id);
  }

}
