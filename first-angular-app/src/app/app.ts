import { Component, signal } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { User } from "./user/user";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-angular-app');
}
