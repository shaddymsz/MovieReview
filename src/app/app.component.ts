import {Component, OnInit, Inject} from '@angular/core';
import {Router} from '@angular/router';
import {MovieCardComponent} from './ui/movie-card/movie-card.component';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'materialApp'; 
   disabled = false;
   invert = false;
   thumbLabel = false;
   value = 0;
   vertical = false;
  query:string;
public data:any=[]

  constructor(public router: Router, @Inject(LOCAL_STORAGE) private storage: WebStorageService) {

  }

  ngOnInit() {    
  }
  
}
