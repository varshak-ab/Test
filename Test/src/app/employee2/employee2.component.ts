import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';


@Component({
  selector: 'app-employee2',
  templateUrl: './employee2.component.html',
  styleUrls: ['./employee2.component.css']
})
export class Employee2Component implements OnInit {

  filter:any='all'
  funnel:any='a-z'

  employees:any = []

  constructor(employeeservice:EmployeeService) {
    employeeservice.getEmployeesInfo().subscribe(
      data => this.employees=data,
      error =>console.log(error)


    )
  }
  ngOnInit(): void {
  }

}