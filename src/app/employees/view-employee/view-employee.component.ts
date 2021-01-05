import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employees } from 'src/app/employees/employees';
import { EmployeesService } from '../employees.service';
@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  employeeId=0;
  employeeDetails:Employees;
  constructor(private activatedriute:ActivatedRoute,private ser:EmployeesService,private router:Router) { }

  ngOnInit(): void {

    
    this.activatedriute.params.subscribe(data=>{
      this.employeeId=data.id;
      this.ser.viewEmployee(this.employeeId).subscribe(resp=>{
        this.employeeDetails=resp;
      })

       })

  
    
  }

   remove(){
  
     if(confirm('Are you sure, you want to delete the Employee list?')){
       this.ser.deleteEmployee(this.employeeId).subscribe(res=>{
         alert('Employee list deleted')
         this.router.navigate(['/employees']);
       })
     }
   }
  }

