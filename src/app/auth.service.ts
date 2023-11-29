import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { IAuthInfo } from './IAuthInfo';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginUrl = 'https://api.escuelajs.co/api/v1/auth/login';
  constructor(private _http: HttpClient) {}
  // login method
  Login(username: string, password: string): Observable<IAuthInfo>{
    var data = {
      email : username,
      password : password
    };
    const headers = new HttpHeaders({'Content-Type':'application/json',
                                      'Accept':'*/*'});
    return this._http.post(this._loginUrl, JSON.stringify(data),{headers: headers}).pipe(
      tap((response:IAuthInfo) => {
        // prepare the response to be handled, then return
        // we'll tidy up later
        console.log('User access_token ', response.access_token);
        console.log('User refresh_token ', response.refresh_token);
        // save in localStorage
        localStorage.setItem('user', JSON.stringify(response));
        return response;
      })
      );
  }
}
