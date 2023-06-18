import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { Company } from '../interfaces/company-interface';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient, private route: Router) { }

  showAll() {
    return this.http.get('http://localhost:8000/admin/companies');
  };

  addCompany(e: Company) {

    const company: Company = { arabicName: e.arabicName, englishName: e.englishName, image: e.image, budget: e.budget }
    return this.http.post('http://localhost:8000/admin/addCompany', company).subscribe(res => {
      console.log(res);
      this.route.navigate(['']);
    }, (err) => {
      console.log(err);
    })
  }



}



