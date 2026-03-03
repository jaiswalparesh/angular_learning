import { Component, EventEmitter, Input, input, Output} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({required: true}) id!:string;
  @Input({required: true}) avatar!:string
  @Input({required: true}) name!:string
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectedClick() {
    this.select.emit(this.id)
  }
}
