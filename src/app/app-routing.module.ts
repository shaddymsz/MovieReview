import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {DetailsComponent} from './pages/details/details.component';
import { LoginComponent } from './login/login.component';
import { ExploreComponent } from './explore/explore.component';
import { SettingsComponent } from './settings/settings.component';
import  { AuthGuard} from  './auth.guard';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from 
'@angular/router';


 const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: ':query', component: HomeComponent},
  {path: 'explore/$', component:ExploreComponent },
  {path: 'settings/$', component: SettingsComponent },
  { path: 'home/$', component: HomeComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
