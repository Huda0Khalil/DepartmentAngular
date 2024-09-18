import { Component, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { TableModule } from 'primeng/table';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DapartmentListComponent } from './dapartment-list/dapartment-list.component';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
const routes : Routes = [
  {path: 'departments', component: DapartmentListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DapartmentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,HttpClientModule, 
    RouterModule.forRoot(routes)
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
