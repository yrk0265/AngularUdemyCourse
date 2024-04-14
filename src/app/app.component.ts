import { Component } from '@angular/core';
import { COURSES } from 'src/db-data';
import { Course } from './model/course';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    courses = [...COURSES];
    onCourseSelected(course:Course) {
        console.log("App component - click event bubbled....",course);

    }
    trackCourse(index:number,course:Course){
        return course.id;
    }
}
