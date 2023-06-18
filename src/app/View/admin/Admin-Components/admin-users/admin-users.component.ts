import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


export interface User {
  _id: string;
  name: string;
  email: string;
  role?: string;
}

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent {

  users: User[];


  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.http.get('http://localhost:8000/admin/users').subscribe((users: any) => {
      this.users = users.map((e: User) => {
        return e;
      })
      console.log(this.users);
    }, (err) => {
      console.log(err);
    })
  }

}
