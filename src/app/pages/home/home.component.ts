import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movieList:any;
  constructor(public router :Router ) {

  }
  
  ngOnInit() {
    this.movieList=JSON.parse(window.localStorage.getItem("dashboardMovie"))
  }
  logout(){
    window.localStorage.clear()
    console.log('adaf')
    return this.router.navigate([''])
    
  }
}
