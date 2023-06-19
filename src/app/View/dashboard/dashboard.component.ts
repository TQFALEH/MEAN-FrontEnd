import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
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
