import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';


interface logoutStatus{

success: boolean

}
@Injectable()
export class DataService {

  private querySource = new BehaviorSubject('default message');
  currentMessage = this.querySource.asObservable();

  constructor(private http: HttpClient,  private router:Router) { }

  changeMessage(message: string) {
    console.log(message)

    this.querySource.next(message)
  }
  logout(){
    window.localStorage.clear()
    console.log('adaf')
    return this.router.navigate([''])
    
  }
}