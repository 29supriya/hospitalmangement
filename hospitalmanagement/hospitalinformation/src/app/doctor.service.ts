import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  getDoctorbyId(pid: number) {
    throw new Error('Method not implemented.');
  }
  private baseURL = "http://localhost:8086/doctors";

  constructor(private httpClient:HttpClient) { }

  getDoctorList(): Observable<String[]>{
    return this.httpClient.get<String[]>('${this.baseURL}');
  }

  getAllDoctors(): Observable<Doctor[]>{
    return this.httpClient.get<Doctor[]>('${this.baseURL}/');
  }
  CreateDoctor(doctor:Doctor): Observable<Object>{
    return this.httpClient.post('${this.baseURL}',doctor);
  
  } 
}
