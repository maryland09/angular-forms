import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public namePattern = "^[a-zA-Zа-яА-ЯёЁ]+(\\s[a-zA-Zа-яА-ЯёЁ]+)+$"
  public passwordPattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]+$"

  public myName = 'Маша'


  constructor() {
  }




  ngOnInit(): void {
  }

  sendForm(form: NgForm){
    form.reset()
  }


}
