import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeInfoComponent } from './components/employee-info/employee-info.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  { path: '', component: EmployeeInfoComponent },
    { path: 'employee-info/:id/edit', component: UpdateComponent },
  { path: 'employee-info', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
