import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LibrerytableComponent } from './librerytable/librerytable.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { HttpClientModule } from '@angular/common/http';
import { InsertDataComponent } from './insert-data/insert-data.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LibrerytableComponent,
    BookdetailsComponent,
    InsertDataComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
