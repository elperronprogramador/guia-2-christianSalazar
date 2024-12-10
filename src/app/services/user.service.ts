import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../shared/models/user.models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:5129/api/users'

  constructor(private http: HttpClient) {}
  
  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.apiUrl);
  }
  
  login(credentials: { email: string; password: string }): Observable<any> {
    const loginUrl = `${this.apiUrl}/login`;  
    return this.http.post<any>(loginUrl, credentials);
  }
  register(userData: { name: string; email: string; password: string }): Observable<any> {
    const registerUrl = `${this.apiUrl}`;   
    return this.http.post<any>(registerUrl, userData);
  }
}
