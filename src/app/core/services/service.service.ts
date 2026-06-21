import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<User[]> {
      return this.http.get<User[]>(`${this.apiUrl}?email=${email}&password=${password}`);
    }

    
    getProfile(userId: number): Observable<User> {
        return this.http.get<User>(`${this.apiUrl}/${userId}`);
    }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('name');
  } 
    isLoggedIn(): boolean {
      return localStorage.getItem('token') !== null;
    }
}
