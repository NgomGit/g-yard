import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SortableDirective } from './sortable.directive';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import { AlerteClosableComponent } from './alerte-closable/alerte-closable.component';
import  { } from '@angular/material';
import { BrowserAnimationsModule } 
       from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SortableDirective,
    ModalBasicComponent,
    AlerteClosableComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
