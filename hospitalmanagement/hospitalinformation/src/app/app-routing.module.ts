import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { AppComponent} from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewDocInfoComponent } from './view-doc-info/view-doc-info.component';
import { ShowPatientComponent } from './show-patient/show-patient.component';
import { ShowDoctorComponent } from './show-doctor/show-doctor.component';

const routes: Routes = [
  {path:'create-doctor',component:CreateDoctorComponent},
  {path:'create-patient',component:CreatePatientComponent},
  {path:"",redirectTo:'AppComponent',pathMatch:'full'},
  {path:'show-patient',component:ShowPatientComponent},
  {path:'show-doctor',component:ShowDoctorComponent},
  {path:'view-doctor-info',component:ViewDocInfoComponent},
  {path:'home',component:HomeComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
