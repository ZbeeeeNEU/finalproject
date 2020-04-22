import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { TestComponent } from './test/test.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UIComponent } from './ui/ui.component';
import {AlldayComponent} from "./allday/allday.component";
import {ActivityAddComponent} from "./activity-add/activity-add.component";
import {ActivityDetailsComponent} from "./activity-details/activity-details.component";
import {ActivityEditComponent} from "./activity-edit/activity-edit.component";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent,
    SignupComponent,
    UIComponent,
    AlldayComponent,
    ActivityAddComponent,
    ActivityDetailsComponent,
    ActivityEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,

    NzGridModule,
    NzIconModule,
    NzLayoutModule,
    NzButtonModule,
    NzSelectModule,
    NzCalendarModule,
    NzCollapseModule,
    NzInputModule,
    NzTableModule,
    NzBadgeModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
