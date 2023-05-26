import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Preferences} from "@capacitor/preferences";
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router){}
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
    console.log('route', route);
    if(route.routeConfig.path == 'sign-in'){
      const { value } = await Preferences.get({key: 'user'});
      if(!value)
        return true;
      this.router.navigate(['/tabs']);
      return false;
    }
    const { value } = await Preferences.get({key: 'user'});
    if(value)
      return true;
    this.router.navigate(['/sign-in']);
    return false;
  }
}
