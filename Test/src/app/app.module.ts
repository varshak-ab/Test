import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Employee1Component } from './employee1/employee1.component';
import { Employee2Component } from './employee2/employee2.component';
import { SearchPipe } from './search.pipe';
import { NgcolorDirective } from './ngcolor.directive';

@NgModule({
  declarations: [
    AppComponent,
    Employee1Component,
    Employee2Component,
    SearchPipe,
    NgcolorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
