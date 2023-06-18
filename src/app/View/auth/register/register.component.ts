import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isLoading: boolean = false;
  message: any
  registerForm!: FormGroup;
  constructor(private auth: AuthService, private route: Router) { }
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  onRegister() {
    this.isLoading = true;
    this.auth.register(this.registerForm.value.name,this.registerForm.value.email, this.registerForm.value.password).subscribe((res) => {
      this.isLoading = false;
      console.log(res);
      this.message = "Welcome"
      setTimeout(() => {
        this.isLoading = false;
        this.message = ""
        this.route.navigate(['/'])
      }, 1500);
    }, err => {
      this.isLoading = false;
      console.log(err.error.messege);
      this.message = err.error.messege
    })

  }

}
