import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { ResourcesPage } from "./resource-list.service";
import { User, UserPage, UsersPage } from "./user-list.service";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  fetchUserList(): Observable<UsersPage> {
    return this.http.get<UsersPage>('https://reqres.in/api/users', {
      params: new HttpParams().set('page', '2'),
    })
    .pipe(      
      catchError(err => {
        return throwError(() => new Error(err.message));
      })
    )
  }
  
  fetchUser(id: number): Observable<UserPage> {
    return this.http.get<UserPage>(`https://reqres.in/api/users/${id}`)
    .pipe(
      catchError(err => {
        return throwError(() => new Error(err.message));
      })
    )
  }
  
  editUser(id: number, data: User): Observable<any> {
    return this.http.put<UserPage>(`https://reqres.in/api/users/${id}`, {
      data
    })
  }

  removeUser(id: number): Observable<any> {
    return this.http.delete<void>(`https://reqres.in/api/users/${id}`)
  }

  fetchResourceList(): Observable<ResourcesPage> {
    return this.http.get<ResourcesPage>('https://reqres.in/api/unknown')
    .pipe(      
      catchError(err => {
        return throwError(() => new Error(err.message));
      })
    )
  }
}