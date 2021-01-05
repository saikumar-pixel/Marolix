import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import {ViewEmployeeComponent} from './view-employee/view-employee.component';
import {AddEmployeeComponent} from './add-employee/add-employee.component';
import {ListEmployeesComponent} from './list-employees/list-employees.component';
import {UpdateEmployeeComponent} from './update-employee/update-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [EmployeesComponent,AddEmployeeComponent,ViewEmployeeComponent,UpdateEmployeeComponent,ListEmployeesComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmployeesModule { }
