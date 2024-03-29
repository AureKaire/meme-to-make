import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Picture } from './model/picture';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/pictures';
  }

  public findAll(): Observable<Picture[]> {
    return this.http.get<Picture[]>(this.usersUrl);
  }

  public save(user: Picture) {
    return this.http.post<Picture>(this.usersUrl, user);
  }

}
