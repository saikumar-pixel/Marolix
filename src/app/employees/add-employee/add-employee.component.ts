import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Employees } from '../employees';

import { EmployeesService } from '../employees.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  empForm:FormGroup;
  empData:Employees;
  imagesArray:any=[];
  constructor(private ser:EmployeesService,private builder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.empForm=this.builder.group({
      firstname:[],
      lastname:[],
      email:[],
      photoPath:[]
    })
  }

  addEmployee(){
    const empl=new Employees();
    empl.firstname=this.empForm.get('name').value;
    empl.lastname=this.empForm.get('name').value;
    empl.email=this.empForm.get('email').value;
    empl.photoPath=this.imagesArray
     console.log(empl);
    this.ser.createEmployee(empl).subscribe(res=>{
     
      
      
    })
    
   this.ser.getEmployees().subscribe(data=>{

    
      this.empData;
     })
 
       this.router.navigate(['/employees'])
  }
  onSelectFile(event) {

    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
       
        var reader = new FileReader();
        reader.onload = (event: any) => {
          console.log(event.target.result);
          this.imagesArray.push(event.target.result);
          
        }
        reader.readAsDataURL(event.target.files[i]);

      }
    }
  }

}
