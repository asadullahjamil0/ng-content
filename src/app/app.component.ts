import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseComponent } from "./course/course.component";
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CourseComponent,NgIf,NgFor,NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-content';
  public myData = [
    {name:"asad",age:34,city:"sheikhupura"},
    {name:"hassan",age:73,city:"gujranwala"},
    {name:"ali",age:44,city:"lahore"}
  ]


  public myVar = false;
  click(){
    return this.myVar === false || this.myVar === true;
  }
}
