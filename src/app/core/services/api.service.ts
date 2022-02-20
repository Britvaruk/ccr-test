import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { UserLogin } from "../interfaces/login.interface";
import { ResourcesPage } from "../interfaces/resource.interface";
import { User, UserPage, UsersPage } from "../interfaces/user.interface";
import { LOGIN, REGISTRATION, RESOURCE_LIST, USER_ITEM, USER_LIST } from "./api.path";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  fetchUserList(): Observable<UsersPage> {
    return this.http.get<UsersPage>(USER_LIST, {
      params: new HttpParams().set('page', '2'),
    })
    .pipe(      
      catchError(err => {
        return throwError(() => new Error(err.message));
      })
    )
  }
  
  fetchUser(id: number): Observable<UserPage> {
    return this.http.get<UserPage>(USER_ITEM.replace(':id', id.toString()))
    .pipe(
      catchError(err => {
        return throwError(() => new Error(err.message));
      })
    )
  }
  
  editUser(id: number, data: User): Observable<any> {
    return this.http.put<UserPage>(USER_ITEM.replace(':id', id.toString()), {
      data
    })
  }

  removeUser(id: number): Observable<any> {
    return this.http.delete<void>(USER_ITEM.replace(':id', id.toString()))
  }

  fetchResourceList(): Observable<ResourcesPage> {
    return this.http.get<ResourcesPage>(RESOURCE_LIST)
    .pipe(      
      catchError(err => {
        return throwError(() => new Error(err.message));
      })
    )
  }

  registration(data: UserLogin): Observable<any> {
    return this.http.post<any>(REGISTRATION, data)
  }

  login(data: UserLogin): Observable<any> {
    return this.http.post<any>(LOGIN, data)
  }
}