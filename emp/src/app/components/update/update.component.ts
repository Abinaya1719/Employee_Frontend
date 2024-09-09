import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../../shared/api-service.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {

  id!: number;

  constructor(private activates:ActivatedRoute,
    private router:Router, 
    private api: ApiServiceService, 
    private fb: FormBuilder) { }

    ngOnInit(): void {
      this.id = this.activates.snapshot.params['id'];
      this.getEmployeeById();
    }

    getEmployeeById(){
      this.api.deleteEmployee(this.id).subscribe((res)=>{
        console.log(res);
      })
     }
}
