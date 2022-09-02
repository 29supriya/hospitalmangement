import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './patient';
@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private baseURL="http://localhost:8088/patients";

  constructor(private httpClient:HttpClient) { }

  getPatient(id:number):Observable<Patient>{
    return this.httpClient.get<Patient>('${this.baseUrl}/${id}');
    
  }

  createPatient(patient:Patient):Observable<Object>{
    return this.httpClient.post('${this.baseUr}/',patient);
    
  }
}
