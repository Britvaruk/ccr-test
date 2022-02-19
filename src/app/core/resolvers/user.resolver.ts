import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ApiService } from "../services/api.service";
import { UserPage } from "../services/user-list.service";


@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<UserPage> {

  constructor (private userListApi: ApiService) {}

  resolve(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): 
    UserPage | Observable<UserPage> | Promise<UserPage> {
      return this.userListApi.fetchUser(+route.params['id']);
  }  
}