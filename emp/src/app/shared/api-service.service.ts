import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }

  private baseurl = 'http://localhost:9999'

  postEmployee(data:any){
    // return this.http.post<any>(this.url,data)
    return this.http.post<any>(this.baseurl+'/employees',data)
  }

  getEmployee(){
    // return this.http.get<any>(this.url)
    return this.http.get<any>(this.baseurl+'/employees')
  }

  getEmployeeById(id: number) {
    return this.http.get<any>(this.baseurl+'/employees/'+id);
  }

  deleteEmployee(id:any):Observable<any>{
    // return this.http.delete<any>(this.url,id)
    return this.http.delete<any>(this.baseurl+'/employees/'+ id);
  }

  updateEmployee(data: any,id:any){
    // return this.http.put<any>(this.url+id,data)
    return this.http.put<any>(this.baseurl+'/employees/'+id, data).pipe(map((res:any)=>{
      return res;
    }))
  }
}
