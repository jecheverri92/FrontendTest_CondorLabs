import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-top-courses',
  templateUrl: './top-courses.component.html',
  styleUrls: ['./top-courses.component.css']
})
export class TopCoursesComponent implements OnInit {

  data: any[] = [];
  constructor(private courses: CourseService) {
    
    this.courses.getTopCourses().subscribe((data:any)=>{

      this.data=data;
      console.log(data)
    })
   }

  ngOnInit() {

  }

}
