import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivePostsComponent } from './pages/active-posts/active-posts.component';


import { NavbarComponent } from './component/navbar/navbar.component';


import { FormsModule } from '@angular/forms';
import { Direttiva1Directive } from './direttive/direttiva1.directive';




@NgModule({
  declarations: [
    AppComponent,
    ActivePostsComponent,


    NavbarComponent,


    Direttiva1Directive,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
FormsModule   //aggiungere per mettere form

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



