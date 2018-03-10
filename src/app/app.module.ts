import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Autosize} from 'angular2-autosize';


import { AppComponent } from './app.component';
import {HomeComponent} from "./pages/home/home.component";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routers";
import {HeaderComponent} from "./components/header.component";
import {BurgerService} from "./services/burger.service";
import {ContactComponent} from "./pages/contanct/contact.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AboutUsComponent} from "./pages/about-us/about-us.component";
import {ServicesComponent} from "./pages/services/services.component";
import {ProjectsComponent} from "./pages/projects/projects.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ContactComponent,
    AboutUsComponent,
    ServicesComponent,
    ProjectsComponent,
    Autosize
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),

  ],
  providers: [BurgerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
