import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseComponent } from "./course/course.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CourseComponent,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-content';
  public myVar = true;
}
