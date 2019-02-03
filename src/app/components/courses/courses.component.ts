import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  data: any[] = [];
  totalItems:number;
  currentPage:number;
  pages:number[]=[];

  constructor( private courses: CourseService) { 
    this.currentPage=1;
  }

  setPage(i:number,event:any){
    event.preventDefault()
    this.currentPage=i+1;
    this.getCourses(i+1);
  }

  ngOnInit() {

    this.courses.getCourses(this.currentPage).subscribe((data:any)=>{

      this.data=data.items;
      console.log(data)
      this.totalItems=data.totalItems;
      for (let i = 1; i <= Math.ceil(this.totalItems/18); i++) {
        this.pages.push(i);
      }
    
    })
  }

  getCourses(i){
    this.courses.getCourses(i).subscribe((data:any)=>{

      this.data=data.items;
    
    })
  }

}
