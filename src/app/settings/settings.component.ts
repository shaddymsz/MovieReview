import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  logout(){
    window.localStorage.clear()
    console.log('adaf')
    return this.router.navigate([''])
    
  }

}
