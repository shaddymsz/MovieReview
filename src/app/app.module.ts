import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { StorageServiceModule} from 'angular-webstorage-service';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HomeComponent} from './pages/home/home.component';
import {DetailsComponent} from './pages/details/details.component';
import {CustomerService} from './services/customerService/customerService.service';
import {MovieCardComponent} from './ui/movie-card/movie-card.component';
import {HttpClientModule} from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ExploreComponent } from './explore/explore.component';
import { DataService } from './services/dataService';
import { SettingsComponent } from './settings/settings.component';
import { MatCardModule,MatSliderModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard} from './auth.guard';
import { Ng5SliderModule } from 'ng5-slider';

const routes: Routes = [
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    MovieCardComponent,
    LoginComponent,
    ExploreComponent,
    SettingsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    FormsModule,
    StorageServiceModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    ReactiveFormsModule,
    Ng5SliderModule
  
  ],
  providers: [
    CustomerService,
    DataService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
