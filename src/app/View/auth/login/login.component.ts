import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoading = false
  message = ""
  loginForm!: FormGroup;

  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }

  onLogin() {
    this.isLoading = true;
    this.auth.login(this.loginForm.value.email, this.loginForm.value.password).subscribe((res) => {
      this.isLoading = false;
      console.log(res);
      this.message = "Welcome"
      setTimeout(() => {
        this.isLoading = false;
        this.message = "Welcome Back"
        this.route.navigate(['/'])
      }, 1500);
    }, err => {
      this.isLoading = false;
      console.log(err.error.messege);
      this.message = err.error.messege
    },)


  }



}
