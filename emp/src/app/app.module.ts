import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeInfoComponent } from './components/employee-info/employee-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiServiceService } from './shared/api-service.service';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { FilterPipe } from './filter.pipe';
import { UpdateComponent } from './components/update/update.component';
import { ActivatedRoute } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeInfoComponent,
    FilterPipe,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    
    
  ],
  providers: [HttpClient,provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
