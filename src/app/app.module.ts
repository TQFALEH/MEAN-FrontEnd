import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './View/auth/login/login.component';
import { RegisterComponent } from './View/auth/register/register.component';
import { DashboardComponent } from './View/dashboard/dashboard.component';
import { NavbarComponent } from './View/navbar/navbar.component';
import { AdminComponent } from './View/admin/admin.component';

import { AdminUsersComponent } from './View/admin/Admin-Components/admin-users/admin-users.component';
import { AdminCompeniesComponent } from './View/admin/Admin-Components/admin-compenies/admin-compenies.component';

import { AddCompanyComponent } from './View/admin/Admin-Components/admin-compenies/add-company/add-company.component';
import { UpdateCompanyComponent } from './View/admin/Admin-Components/admin-compenies/update-company/update-company.component';
import { UpdateFormComponent } from './View/admin/Admin-Components/admin-compenies/update-company/update-form/update-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    NavbarComponent,
    AdminComponent,
    AdminUsersComponent,
    AdminCompeniesComponent,
    AddCompanyComponent,
    UpdateCompanyComponent,
    UpdateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
