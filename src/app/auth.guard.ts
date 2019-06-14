import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private route : Router){}

  canActivate(){
    let k=window.localStorage.getItem("credential")
    if(k==null || k=="" || k==undefined )
      return true;
    else
      this.route.navigateByUrl('/')
  }

}
