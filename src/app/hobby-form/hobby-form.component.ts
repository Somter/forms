import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup,
  FormControl, Validators, FormArray, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-hobby-form',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './hobby-form.component.html',
  styleUrls: ['./hobby-form.component.css']
})
export class HobbyFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      terms: [false, Validators.requiredTrue],
      hobbies: this.fb.array([])
    });
  }

  get hobbies() {
    return this.form.get('hobbies') as FormArray;
  }

  addHobby() {
    this.hobbies.push(this.fb.control(''));
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
