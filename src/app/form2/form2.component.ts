import { Component } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-form2',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './form2.component.html',
  styleUrl: './form2.component.css'
})
export class Form2Component {
  myForm : FormGroup;

  constructor(){
      this.myForm = new FormGroup(
        {
          "userEmail": new FormControl("", [Validators.required,Validators.email]),
          "userPassword": new FormControl("", Validators.pattern("[0-9]{11}"))
      });
  }

  submit(){
      console.log(this.myForm);
  }

}
