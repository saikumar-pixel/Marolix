import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employees} from './employees';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http:HttpClient) { }

  getEmployees():Observable<Employees>{
    return this.http.get<Employees>("http://localhost:3000/Employees");
  }

createEmployee(emp):Observable<Employees>{
 const empUrl="http://localhost:3000/Employees";
 return this.http.post<Employees>(empUrl,emp);
}
viewEmployee(empId):Observable<Employees>{
  const empUrl="http://localhost:3000/Employees/"+empId;
  return this.http.get<Employees>(empUrl);
}
updateEmployee(empId,empBody):Observable<Employees>{
  
  return this.http.put<Employees>("http://localhost:3000/Employees/"+empId,empBody)
}
deleteEmployee(empId):Observable<Employees>{
  return this.http.delete<Employees>("http://localhost:3000/Employees/"+empId);
}

}
