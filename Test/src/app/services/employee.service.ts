import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl:any='assets/json/employees.json'


  constructor(private http:HttpClient) { }
  getEmployeesInfo():Observable<any>{
    return this.http.get(this.baseUrl)
  }
  getEmployees1Info():Observable<any>{
    return this.http.get(this.baseUrl)
  }

}