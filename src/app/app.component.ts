import { Component, SimpleChanges } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curd';
  isAuth : boolean ;
  isAdmin : boolean ;


  constructor(private auth: AuthService, private http: HttpClient,) { }


  ngOnInit(): void {
    // this.auth.checkUser().subscribe((isUser: any) => {
    //   console.log(isUser.status);
    //   if (isUser.status) {
    //     this.isAuth = isUser.status;
    //     this.isAdmin = isUser.userData.role;
    //   }
    // })
  }


}
