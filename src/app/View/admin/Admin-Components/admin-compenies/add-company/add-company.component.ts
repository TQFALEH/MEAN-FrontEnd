import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/shared/services/admin.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent {
  isLoading = false;
  companyForm!: FormGroup;
  constructor(private auth: AuthService, private admin: AdminService, private route: Router) { }
  ngOnInit(): void {
    this.companyForm = new FormGroup({
      arabicName: new FormControl('', [Validators.required]),
      englishName: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      budget: new FormControl('', [Validators.required]),
    })
  }


  onadd() {
    this.admin.addCompany(this.companyForm.value);

  }
}
