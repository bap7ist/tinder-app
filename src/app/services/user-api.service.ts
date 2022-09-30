import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  constructor(private http: HttpClient) {}

  getUser() {
    return this.http
      .get(
        'https://randomuser.me/api/?inc=gender,name,email,phone,dob,nat,picture&noinfo'
      )
      .pipe(map((res: any) => res.results[0]));
  }

  getUsers(amount: number) {
    return this.http
      .get(`https://randomuser.me/api/?results=${amount}`)
      .pipe(map((res: any) => res.results))
  }
}
