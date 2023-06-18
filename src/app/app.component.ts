import { Component, SimpleChanges } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { adminEmitters, authEmitters } from './shared/authEmmiter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curd';



  constructor(private auth: AuthService, private http: HttpClient, ) { }


  ngOnInit(): void {
  

  }


}
