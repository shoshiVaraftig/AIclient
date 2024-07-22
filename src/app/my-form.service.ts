import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyFormService {
  private apiUrl = 'http://localhost:2000/'; // שנה את ה-URL לכתובת ה-API שלך

  constructor(private http: HttpClient) { }

  submitForm(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
