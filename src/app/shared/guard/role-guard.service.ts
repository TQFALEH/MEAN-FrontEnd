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

export class AdminGuardTsService {

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
      this.auth.checkUser().subscribe((isUser: any) => {
        console.log(isUser.status);
        if (isUser.userData.role) {
          return resolve(true)
        }
      })
    });
  }
}
