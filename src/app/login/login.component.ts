import { Component, OnInit, Inject } from '@angular/core';
import { Register } from 'model/register';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { User } from '../user';
//import { getMaxListeners } from 'cluster';
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public data:any=[]
  register :Register[];
  constructor(private router: Router,  ) { }
  submitted=false;

  ngOnInit() {
  }
  loginUser(login)
  {
    const userCredential=JSON.parse(window.localStorage.getItem("credential"));
    const formFilled=login.value;
    if(formFilled.login==userCredential.name && formFilled.pass==userCredential.password){
      //navigate
      
      this.router.navigate(['/home/$'])
      console.log("LOGGED IN");    }
  }
  onSubmit(userModel){
    window.localStorage.setItem("credential",JSON.stringify(userModel.value));
    this.router.navigate(['/home/$'])
  }
}
