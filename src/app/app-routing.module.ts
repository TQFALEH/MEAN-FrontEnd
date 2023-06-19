import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './View/auth/login/login.component';
import { RegisterComponent } from './View/auth/register/register.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './View/dashboard/dashboard.component';
import { AuthGuardTsService } from './shared/guard/auth-guard.ts.service';
import { AdminGuardTsService } from './shared/guard/role-guard.service';
import { AdminComponent } from './View/admin/admin.component';
import { AdminUsersComponent } from './View/admin/Admin-Components/admin-users/admin-users.component';
import { AdminCompeniesComponent } from './View/admin/Admin-Components/admin-compenies/admin-compenies.component';
import { AddCompanyComponent } from './View/admin/Admin-Components/admin-compenies/add-company/add-company.component';
import { NormalGuardTsService } from './shared/guard/normal-user.service';
import { UpdateCompanyComponent } from './View/admin/Admin-Components/admin-compenies/update-company/update-company.component';
import { UpdateFormComponent } from './View/admin/Admin-Components/admin-compenies/update-company/update-form/update-form.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent, canActivate: [AuthGuardTsService] },
  { path: 'login', component: LoginComponent, canActivate: [NormalGuardTsService] },
  {
    path: 'register', component: RegisterComponent, canActivate: [NormalGuardTsService]
  }
  , { path: 'admin', component: AdminComponent, canActivate: [AdminGuardTsService] },
  { path: 'users', component: AdminUsersComponent, canActivate: [AdminGuardTsService] },
  { path: 'companies', component: AdminCompeniesComponent, canActivate: [AdminGuardTsService] },
  { path: 'add-company', component: AddCompanyComponent, canActivate: [AdminGuardTsService] },
  { path: 'update-company', component: UpdateCompanyComponent, canActivate: [AdminGuardTsService] },
  { path: 'update-company/:id', component: UpdateFormComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
