import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NormalGuardTsService {

  constructor(private route: Router, private auth: AuthService,) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return new Promise((resolve) => {
      this.auth.checkUser().subscribe(res => {
        console.log(res);
        if (!res) {
          console.log("'there's not user logged in");
          return resolve(true);
        }
      })
    });
  }
}

