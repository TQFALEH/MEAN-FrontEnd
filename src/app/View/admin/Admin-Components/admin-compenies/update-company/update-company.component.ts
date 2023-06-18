import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/shared/interfaces/company-interface';
import { AdminService } from 'src/app/shared/services/admin.service';
import { AuthService } from 'src/app/shared/services/auth.service';



@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent {

  companies: Company[];
  constructor(private route: Router, private http: HttpClient, private admin: AdminService) { }

  ngOnInit(): void {
    this.admin.showAll().subscribe((companies: any) => {
      this.companies = companies.map((element: Company) => {
        return element;
      });

    }, (err) => {

    })
  }


  onDelete(id: any) {
    console.log(id);
    this.http.delete(`http://localhost:8000/admin/company/${id}`).subscribe(result => {
      console.log("Deleted");
      this.route.navigate(['/companies'])
    }, (err) => {
      console.log(err);
    })
  }


  onEdit(company: Company) {
    this.route.navigate(['/update-company/', company._id])
  }
}
