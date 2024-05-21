import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from './User';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  newUser = new User("12345", "alex@gmail.com")

  users: User[] = [];

  addUser() {
    console.log({
      email: this.newUser.email,
      password: this.newUser.password
    });
    this.users.push({...this.newUser});
  }
}
