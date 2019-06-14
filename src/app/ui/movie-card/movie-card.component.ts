import {Component, OnDestroy, OnInit} from '@angular/core';

import {CustomerService} from '../../services/customerService/customerService.service';
import { movieCard } from './entity';
import {environment} from '../../../environments/environment';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService}  from './../../services/dataService';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})

export class MovieCardComponent implements OnInit, OnDestroy {

  movieList : movieCard;
  headerString : string;
  environ:any;
  bind: boolean;
  finished:boolean;
  queryData:string;
  resultFound:boolean;
  page:number;

  constructor(public data: DataService,private sharedService:CustomerService,private route:ActivatedRoute,private router:Router) {
    this.headerString="";
    this.environ=environment;
    this.movieList=new movieCard();
    this.bind=false;
    this.finished=false;
    this.resultFound=false;
    this.page=1;  
  }
  
  ngOnInit() {
    this.data.currentMessage.subscribe( message => {this.queryData=message
    this.headerString=this.queryData 
    this.sharedService.getQueryMovie(this.movieList.page,this.queryData)
          .subscribe((data:any) => { 
            this.movieList=data;
    });
  })
  }

  public setData(data){
    console.log(data)
    console.log(this.movieList)
    this.movieList.Search=this.movieList.Search.concat((data.Search))
    this.page=this.page+1;
    this.bind=false;
  }

  public onScrollDown(): void {
    this.bind=true;
    this.sharedService.getQueryMovie(this.page+1,this.queryData)
          .subscribe((data:any) => {
            console.log(data)
            if(data.Response!="False")
             this.setData(data);
      });
  }

  ngOnDestroy() {

  }

  openDetails(id,detail) {
    this.router.navigateByUrl('/details/'+id);
    localStorage.setItem(id,JSON.stringify(detail));
  }

  public showQueryData(query){
    this.headerString=query;
    this.finished=false;
    this.bind=true;
    this.sharedService.getQueryMovie(1,query)
      .subscribe((data:any) => {
        if(data.results.length==0){
          this.resultFound=true;
        }
        this.movieList=data;
        this.bind=false;
    });
  }

}

