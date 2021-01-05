import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeesComponent } from './employees.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

const routes: Routes = [
{path:'employees',component:ListEmployeesComponent},
  {path:'add',component:AddEmployeeComponent},
  {path:'',redirectTo:'employees',pathMatch:'full'},
  {path:'update/:id',component:UpdateEmployeeComponent},
  {path:'view/:id',component:ViewEmployeeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
