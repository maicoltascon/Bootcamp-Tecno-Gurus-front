import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { User } from '../../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(public http: HttpClient) { }

  register(user: User): Observable<User> {
    return this.http.post<User>(`${environment.API_REST_URL}/users/register/`, {
      user
    });
  }


}
