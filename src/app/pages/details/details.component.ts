import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CustomerService} from '../../services/customerService/customerService.service';
import {movieDetail} from './entity';
import {environment} from '../../../environments/environment';
import { Options } from 'ng5-slider';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
  value: number=100;
  options: Options = {
    floor: 0,
    ceil: 10
  };

  detail:any;
  movieId:number;
  keywords:any;
  environ:any;
  crew:any;
  titles:any;
  titleLoad:boolean;
  crewLoad:boolean;

  constructor(public activeRouter: ActivatedRoute, public movie: CustomerService) {
    this.detail=new movieDetail();
    this.environ=environment;
    this.value=0;
  }
  
  ngOnInit() {
    this.activeRouter.paramMap.subscribe((route: any) => {
      this.movieId = route.params.id;
        this.movie.getMovieDetails(this.movieId,1)
          .subscribe((data:any) => {
            this.detail=data;
            let k: any;
             k=window.localStorage.getItem("dashboardMovie")
            if(k=="" || k==undefined || k==null){
              console.log(JSON.stringify([]))
              window.localStorage.setItem("dashboardMovie",JSON.stringify([]))              
            }
            k=JSON.parse(window.localStorage.getItem("dashboardMovie"))
            let flag=false;
            k.forEach((data)=>{
              if(data.imdbID==this.movieId)
                flag=true;
            })
            if(!flag){
              let det=[]
              det.push(this.detail)
              k=k.concat(det);
              window.localStorage.setItem("dashboardMovie",JSON.stringify(k))              
            }
          });
       });
  }
    
  userMsg(option){
    // this.messageList.push({"parMsg":{"msg":option.optionName,"userClass":"other","url":"./../assets/images.png"}})
    // this.customer.getMovieDetails(option.id,this.companyId)
    //   .subscribe((data:any) => {
    //     this.message=data;
    //     this.message.parMsg["url"]="./../assets/customer.jpeg";
    //     this.messageList.push(this.message);
    //     window.scrollTo(0,document.body.scrollHeight);
    //   });
      window.scrollTo(0,document.body.scrollHeight);
    }
      onSubmit(userRate){
        let k=JSON.parse(window.localStorage.getItem("dashboardMovie"))
        k.forEach((data)=>{
          if(data.imdbID==this.movieId)
            data["rate"]=userRate.value
        })
        window.localStorage.setItem("dashboardMovie",k)
      }
}
