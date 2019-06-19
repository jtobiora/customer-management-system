import { Observable } from 'rxjs/internal/Rx';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../model/user.model";
import {of} from 'rxjs';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/api';

  getCustomers() {
    return this.http.get<User[]>(this.baseUrl + "/customers");
  }

  getUserById(id: number){
    return this.http.get<User>(this.baseUrl + '/customer/' + id);
  }

  addCustomer(user: User) {
    return this.http.post(this.baseUrl + '/customer', user);
  }

  updateCustomer(user: User) {
    return this.http.put(this.baseUrl + '/customer/' + user.id, user);
  }

  deleteCustomer(id: number) {
    return this.http.delete(this.baseUrl + '/customer/' + id);
  }


}
