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
import { AuthGuardTsService } from './auth-guard.ts.service';

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


    });
  }
}

