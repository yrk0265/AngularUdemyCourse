import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { COURSES } from 'src/db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './courses/course-card/course-card.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

    courses = [...COURSES];
    title=this.courses[0].description;
    price=9.99;
    rate=0.67;

    @ViewChild('cardRef1',{read:ElementRef})
    card1 : ElementRef;

    @ViewChild('cardRef2')
    card2 : CourseCardComponent;

    @ViewChild('container')
    containerDiv:ElementRef;

    @ViewChildren(CourseCardComponent,{read:ElementRef})
    cards:QueryList<ElementRef>; 

    startDate = new Date(2000,0,1);
    course = this.courses[0];
    constructor(){
        console.log('containerDiv',this.card1);
    }
    
    onCourseEdited() {
        // this.courses.push(
        //     {
        //         id:1,
        //         description:"Angular Core Deep Dive",
        //         iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
        //         longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
        //         category: 'INTERMEDIATE',
        //         lessonsCount: 10
        //     }
        // );

    }
    onCourseSelected(course:Course) {
        //console.log("App component - click event bubbled....",course);
        console.log(this.card1);
    }
    trackCourse(index:number,course:Course){
        return course.id;
    }
    ngAfterViewInit(): void {
        console.log(this.cards);
        // this.cards.changes.subscribe(
        //     cards=>console.log(cards)
        // );
        //console.log('containerDiv',this.card1);
        //this.courses[0].description=''
    }
}
