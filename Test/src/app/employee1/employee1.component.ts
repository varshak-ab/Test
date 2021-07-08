import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';


@Component({
  selector: 'app-employee1',
  templateUrl: './employee1.component.html',
  styleUrls: ['./employee1.component.css']
})
export class Employee1Component implements OnInit {

  filter:any='all'
  funnel:any='a-z'

  employees:any = {}
  constructor(private employeeservice:EmployeeService)
  {
    employeeservice.getEmployees1Info().subscribe(
      data => this.employees=data,
      error =>console.log(error)


    )

}  ngOnInit(): void {

  }
}