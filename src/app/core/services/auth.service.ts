import { Injectable } from "@angular/core";

export interface UserLogin {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuth = false;

  login() {
    this.isAuth = true;
  }

  logout() {
    this.isAuth = false;
  }
  
}