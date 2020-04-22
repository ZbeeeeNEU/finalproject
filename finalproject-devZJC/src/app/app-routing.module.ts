import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UIComponent } from './ui/ui.component';
import {ActivityDetailsComponent} from "./activity-details/activity-details.component";
import {ActivityEditComponent} from "./activity-edit/activity-edit.component";

const routes: Routes = [
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: 'Login', component: LoginComponent },
  { path: 'SignUp', component: SignupComponent },
  { path: 'UI', component: UIComponent },
  {
    path: 'details',
    component: ActivityDetailsComponent,
    data: { title: 'Activity Details' }
  },
  { path: 'edit', component: ActivityEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
