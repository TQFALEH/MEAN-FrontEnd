import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AuthGuardTsService } from 'src/app/shared/guard/auth-guard.ts.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isAdmin: boolean;
  isAuth: boolean;
  constructor(private auth: AuthService, private router: Router,) { }


  ngOnInit(): void {
    this.router.events.subscribe((e) => {
      this.auth.checkUser().subscribe((isUser: any) => {
        if (isUser.status) {
          this.isAuth = isUser.status;
          this.isAdmin = isUser.userData.role;
          console.log(this.isAdmin);
        }
      });
    })
  }
  logout() {
    this.auth.logout();
    this.isAdmin = false;
    this.isAuth = false;
  }
  admin() {
    this.router.navigate(['/admin'])
  }
}
