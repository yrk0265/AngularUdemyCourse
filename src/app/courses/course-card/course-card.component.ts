import {
    Component,
    Input,
    OnInit,
    Output,
    EventEmitter
} from '@angular/core';
import { Course } from 'src/app/model/course';


@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements  OnInit {


    @Input()
    course:Course;

    @Input({required:true})
    index:number;

    @Output()
    courseSelected=new EventEmitter<Course>();

    constructor() {


    }

    ngOnInit() {


    }


    onCourseViewed() {
      console.log("card component - button clicked ....");
      this.courseSelected.emit(this.course);
    }
    

    


}
