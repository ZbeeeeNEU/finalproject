import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlldayComponent } from './allday/allday.component';
import { ActivityAddComponent } from './activity-add/activity-add.component';
import { ActivityDetailsComponent } from './activity-details/activity-details.component';
import { ActivityEditComponent } from './activity-edit/activity-edit.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);

const appRoutes: Routes = [
  {
    path: 'activities',// the user id, which represents one Collection in DB
    component: AlldayComponent,
    data: { title: 'Today' }
  },
  {
    path: 'activity-details/:id',
    component: ActivityDetailsComponent,
    data: { title: 'Activity Details' }
  },
  {
    path: 'activity-add',
    component: ActivityAddComponent,
    data: { title: 'Activity Add' }
  },
  {
    path: 'activity-edit/:id',
    component: ActivityEditComponent,
    data: { title: 'Activity Edit' }
  },
  { path: '',
    redirectTo: '/activities',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    AlldayComponent,
    ActivityAddComponent,
    ActivityDetailsComponent,
    ActivityEditComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
