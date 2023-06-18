import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { authEmitters, adminEmitters } from 'src/app/shared/authEmmiter';
import { AuthGuardTsService } from 'src/app/shared/guard/auth-guard.ts.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isAdmin : boolean;
  isAuth : boolean;
  constructor(private auth: AuthService, private http: HttpClient, private ffff: AuthGuardTsService) { }


  ngOnInit(): void {
     authEmitters.authEmitter.subscribe((auth: boolean) => {
       this.isAuth = auth;
     });
     adminEmitters.isAdmin.subscribe((role: boolean) => {
       this.isAdmin = role;
     });

  }


  logout() {

    this.auth.logout()
    this.isAdmin = false;
    this.isAuth = false;
  }
}
