import { Component, OnInit } from '@angular/core';
import {DataService} from './../services/dataService'
import { Router } from "@angular/router";

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  message : string;
  constructor(private data:DataService,private router: Router) { }

  ngOnInit() {
  }
  openDetails(id,detail) {
    this.router.navigateByUrl('/details/'+id);
    localStorage.setItem(id,JSON.stringify(detail));
  }
  onSubmit(userSearch){
    console.log(userSearch.value)
    this.data.changeMessage(userSearch.value.search)
  }
  logout(){
    window.localStorage.clear()
    console.log('adaf')
    return this.router.navigate([''])
    
  }
}
