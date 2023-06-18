import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { authEmitters } from '../authEmmiter';
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
      this.auth.checkUser().subscribe((user: any) => {
        if (user.role) {
          console.log(user.role);
          return resolve(true);
        }
      }, (err) => {
        this.route.navigate(['/login'])
        return resolve(false)
      })
    });
  }
}
