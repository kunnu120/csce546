import { Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{
  username: string;
  password: string;
  constructor(private route: Router, private r: ActivatedRoute, private menuCtrl: MenuController) {
    this.username = "";
    this.password = "";
  }
  login() {
    if(this.username == "" || this.password == "") {
      alert("Please enter an Username and/or Password");
    } else {
      this.route.navigate(['home']);
      this.username = "";
      this.password = "";
    }
  }
  signUp() {
    this.route.navigate(['/signup']);
  }
}
