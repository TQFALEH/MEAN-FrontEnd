import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/shared/interfaces/company-interface';
import { AdminService } from 'src/app/shared/services/admin.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent {
  isLoading = false;
  companyForm: FormGroup;
  company: Company;

  constructor(private acRouter: ActivatedRoute, private _formBuilder: FormBuilder, private https: HttpClient, private admin: AdminService, private route: Router) { }
  ngOnInit(): void {
    const id = (this.acRouter.snapshot.paramMap.get('id'));
    this.https.get(`http://localhost:8000/admin/company/${id}`).subscribe((company: any) => {
      this.company = company;
    }, (err) => {
      console.log(err);
    })
    this.companyForm = new FormGroup({
      arabicName: new FormControl("", [Validators.required]),
      englishName: new FormControl("", [Validators.required]),
      image: new FormControl("", [Validators.required]),
      budget: new FormControl("", [Validators.required]),

    });
  }


  onUpdate() {
    this.https.put(`http://localhost:8000/admin/company/update/${this.company._id}`, this.companyForm.value).subscribe(result => {
      console.log(this.company._id);
      console.log('Done & Updated');
      this.route.navigate(['/update-company'])
    }, (err) => {
      console.log(err);

    })
  }
}
