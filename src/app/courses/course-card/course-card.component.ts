import {
    Component,
    Input,
    OnInit,
    Output,
    EventEmitter,
    ViewChild,
    ContentChild,
    ElementRef,
    ContentChildren,
    AfterContentInit
} from '@angular/core';
import { Course } from 'src/app/model/course';
import { CourseImageComponent } from '../course-image/course-image.component';


@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements  OnInit ,AfterContentInit{
    constructor() {
    }
  
    onCourseViewed() {
      console.log("card component - button clicked ....");
      this.courseEmitter.emit(this.course);
    }
    isImageVisible() {
       return this.course && this.course.iconUrl;
    }
    cardClasses(){
        return ['beginner','course-card'];
    }
    cardStyles(){
      return {'background-image':'url('+this.course.iconUrl+')'};
    }
    ngAfterViewInit(){
      console.log(this.image);
    }
    ngOnInit(): void {
    }
    ngAfterContentInit(): void {
      console.log(this.image);
    }
    @Input()
    course:Course;

    @Input()
    cardIndex:number;

    @Output("courseSelected")
    courseEmitter=new EventEmitter<Course>();

    // @ContentChild('container')
    // image;
    @ContentChildren(CourseImageComponent)
    image;
}
    
    
    

