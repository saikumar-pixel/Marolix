import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  updateform:FormGroup;

  employeeId=0;
  employeeDetails;
  constructor(private activatedriute:ActivatedRoute,private builder:FormBuilder,private ser:EmployeesService,private riuter:Router) { }

  ngOnInit(): void {
    this.updateform=this.builder.group({
      id:[],
      firstname:[],
      lastname:[],
      email:[]

    })
     

    this.activatedriute.params.subscribe(data=>{
   this.employeeId=data.id;
   
    })
    this.ser.viewEmployee(this.employeeId).subscribe(resp=>{
      this.employeeDetails=resp;
      this.updateform.get('id').setValue(this.employeeDetails.id);
      this.updateform.get('firstname').setValue(this.employeeDetails.firstname);
      this.updateform.get('lastname').setValue(this.employeeDetails.lastname);
      this.updateform.get('email').setValue(this.employeeDetails.email);
    })
  }
  updateEmployee(){
    const update={
      id:this.updateform.get('id').value,
      firstname:this.updateform.get('firstname').value,
      lastname:this.updateform.get('lastname').value,
      email:this.updateform.get('email').value
    }
     this.ser.updateEmployee(this.employeeId,update).subscribe(res=>{
      this.employeeDetails=res;
      this.riuter.navigate(['/employees']);
      this.updateform.reset();
     })
  }
  }


