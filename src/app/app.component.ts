import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule}  from '@angular/forms';
import { MyFormComponent } from '../my-form/my-form.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MyFormComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-new-project';
}
