import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { ShowDoctorComponent } from './show-doctor/show-doctor.component';
import { ShowPatientComponent } from './show-patient/show-patient.component';
import { ViewAllDoctorsComponent } from './view-all-doctors/view-all-doctors.component';
import { ViewDocInfoComponent } from './view-doc-info/view-doc-info.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ComponentNotFoundComponent } from './component-not-found/component-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateDoctorComponent,
    CreatePatientComponent,
    ShowDoctorComponent,
    ShowPatientComponent,
    ViewAllDoctorsComponent,
    ViewDocInfoComponent,
    HomeComponent,
    ComponentNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
