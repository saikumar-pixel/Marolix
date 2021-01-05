import { Component, OnInit } from '@angular/core';
import {EmployeesService} from 'src/app/employees/employees.service';
import { Employees } from '../employees';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  empData:Employees;
 
  constructor(private emp:EmployeesService) { }

  ngOnInit(): void {

    this.emp.getEmployees().subscribe(data=>{
      this.empData=data;
    
      
    })
  }

}
