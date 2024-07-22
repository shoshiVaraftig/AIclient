import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms'; // הוספת מודול ה-Forms
import { HttpClientModule } from '@angular/common/http'; // להוספת HttpClient
import { from } from 'rxjs';  
import { MyFormService } from '../app/my-form.service';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'my-form',
  standalone: true,
  templateUrl: './my-form.component.html',
  styleUrl:'./my-form.component.css',
  imports:[FormsModule,HttpClientModule,CommonModule]
})

  export class MyFormComponent{
    constructor(private http: HttpClient) {}
    responseMessage: string = '';

    onSubmit(form: any) {
      const formData = {
        "a-input": form.value["a-input"],
        "b-input": form.value["b-input"],
        "c-input": form.value["c-input"],
        "d-input": form.value["d-input"],
      };
  
      console.log(form); // הדפסת טופס לצורך בדיקה
      this.http.post('http://localhost:2000/prompt', formData, { responseType: 'text' }).subscribe(
        response => {
          console.log('Response from server:', response);
          this.responseMessage=response;
        },
        error => {
          console.error('Error:', error);
        }
      );
    }
  }
  
