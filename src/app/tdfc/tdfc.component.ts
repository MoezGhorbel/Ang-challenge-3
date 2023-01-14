import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-tdfc',
  templateUrl: './tdfc.component.html',
  styleUrls: ['./tdfc.component.css']
})
export class TDFCComponent implements OnInit {

  onSubmit() {
    console.log(this.UserModel);
  }

  UserModel = new User('', '', '', '', '', '');

  choiceNotMade!: boolean;

  validateChoice(value: string) {
    console.log(value);
    

    if (value === 'default') {
      this.choiceNotMade = false;
    } else {
      this.choiceNotMade = true;
    }
  }

  ngOnInit(): void {
  }

}
