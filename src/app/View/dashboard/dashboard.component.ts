import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { authEmitters, adminEmitters } from 'src/app/shared/authEmmiter';
import { AdminService } from 'src/app/shared/services/admin.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  companies: any =[]
  constructor(private auth: AuthService, private http: HttpClient, private admin: AdminService) { }
term :any
  ngOnInit(): void {
    this.term
    this.http.get('http://localhost:8000/auth/user', {
      withCredentials: true
    }).subscribe((result: any) => {

      adminEmitters.isAdmin.emit(result.role);
      authEmitters.authEmitter.emit(true);
    }
      , (err) => {
        authEmitters.authEmitter.emit(false);
        console.log(err);
      })


    this.admin.showAll().subscribe((res: any) => {
      console.log(res);
      res.forEach((element: any) => {
        this.companies.push(element);
      });

    }, (err) => {
      console.log(err);
    })

    console.log(this.companies)
  }

}
