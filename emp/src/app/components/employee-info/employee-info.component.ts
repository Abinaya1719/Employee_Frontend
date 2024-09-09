import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiServiceService } from '../../shared/api-service.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EmployeeModel } from '../../employee.model';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrl: './employee-info.component.css'
})
export class EmployeeInfoComponent {
  

  dataId!:number;
  searchtext:any;
  employeeForm!: FormGroup;
  employeeModel: any;
  employeeDetails: any;
  showAddButton: boolean = true;
  showUpdateButton: boolean = false
  employee: any = {};
  id!:number;
  studentobj:EmployeeModel = new EmployeeModel;

  constructor(private activates:ActivatedRoute,
    private router:Router, 
    private api: ApiServiceService, 
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.activates.snapshot.params['id'];
    this.getAllEmployeeDetails();
    this.createEmployeeForm();
     this.getEmployeeById();
  }
  getEmployeeById() {
    if(this.id){
      this.api.getEmployeeById(this.id).subscribe(employee => {
        this.employeeForm.patchValue(employee);
      });
    }
  }

  createEmployeeForm() {
    this.employeeForm = this.fb.group({
      name: [''],
      EmployeeID: [''],
      department: [''],
      salary: [''],
      level: [''],
      location: ['']
    })
    this.employeeForm.reset();
  }

  // searchById() {
  //   const id=this.employeeForm.get('id')?.value;
  //   if(id){
  //     this.api.getEmployeeById(id).subscribe(data=>{
  //       this.employee = data;
  //     })
  //   } else {
  //     alert('Please enter a valid ID')
  //   }
  // }

  getAllEmployeeDetails() {
    this.api.getEmployee().subscribe(res => {
      this.employeeDetails = res

    }, err => {
      console.log(err)
    })
  }

  onAddEmployee() {
    this.showAddButton = true;
    this.showUpdateButton = false;
  }

  postEmployeeDetails() {
    this.employeeModel = Object.assign({}, this.employeeForm.value);

    this.api.postEmployee(this.employeeModel).subscribe(res => {
      alert("Employee Information added ")
      let close = document.getElementById('close');
      close?.click();
      this.employeeForm.reset();
      this.getAllEmployeeDetails();
    }, err => {
      alert("Error")
    })
  }

  deleteEmployeeDetail(id: any) {
    console.log('Deleting employee with id:', id);
    this.api.deleteEmployee(id).subscribe(res => {
      alert("Employee Information Deleted");
      this.getAllEmployeeDetails();
    }, err => {
      alert("Failed to delete student information")
    })
  }

  edit(employee: any) {
    this.showAddButton = false;
    this.showUpdateButton = true;
    this.employeeForm.controls['name'].setValue(employee.name);
    this.employeeForm.controls['EmployeeID'].setValue(employee.EmployeeID);
    this.employeeForm.controls['department'].setValue(employee.department);
    this.employeeForm.controls['salary'].setValue(employee.salary);
    this.employeeForm.controls['level'].setValue(employee.level);
    this.employeeForm.controls['location'].setValue(employee.location);
    this.studentobj.id = employee.id;
    // console.log(this.studentobj);
    
   }

  //  updateEmployeeDetails() {
  //   console.log(this.employeeForm.value);
  //   this.employeeModel = Object.assign({},this.employeeForm.value);
  //   let close = document.getElementById('close');
  //   close?.click();
    
  //   this.api.updateEmployee(this.employeeObj, this.employeeObj.id).subscribe(res => {
  //     alert("updated")
  //     this.getAllEmployeeDetails();
  //     this.employeeForm.reset();
  //     // this.employeeModel = this.employeeModel;
  //   }, err => {
  //     alert("Not updated")
  //   })
  // }
  UpdateStudent(){
  
    this.studentobj.name = this.employeeForm.value.name;
    this.studentobj.EmployeeID = this.employeeForm.value.EmployeeID;
    this.studentobj.department = this.employeeForm.value.department;
    this.studentobj.salary = this.employeeForm.value.salary;
    this.studentobj.level = this.employeeForm.value.level;
    this.studentobj.location = this.employeeForm.value.location;
    this.api.updateEmployee(this.studentobj,this.studentobj.id).subscribe(res => {
      alert("Data Updated");
      this.getAllEmployeeDetails();
    })


  }

 

  reset() {
    this.employeeForm.reset();
    this.employeeModel = {};
  }
  
}
