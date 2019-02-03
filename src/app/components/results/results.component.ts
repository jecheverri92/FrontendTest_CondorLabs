import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  data: any[] = [];
  termino:string;
  totalItems:number;
  currentPage:number;
  pages:number[]=[];


  constructor(private courseService: CourseService,
    private activatedRouted: ActivatedRoute) {
      this.currentPage=1;
     }

    
  setPage(i:number,event:any){
    event.preventDefault()
    this.currentPage=i+1;
    console.log(this.currentPage)
    this.getCourses(i+1);
  }

  ngOnInit() {
    this.activatedRouted.params.subscribe(params=>{
      this.termino =params['termino'];
      this.courseService.searchCourses(this.termino,this.currentPage).subscribe((data:any)=>{
        this.data=data.items;
        this.totalItems=data.totalItems;
        this.getArray(data.totalItems);
        console.log(this.totalItems)
        console.log(this.data);
      })
    })
  }

  getArray(totalItems){
    this.pages =[];
    for (let i = 1; i <= Math.ceil(totalItems/18); i++) { //Pages
      this.pages.push(i);
    }
  }

  getCourses(i){
    this.courseService.searchCourses(this.termino,i).subscribe((data:any)=>{
      this.totalItems=data.totalItems;
      this.getArray(data.totalItems);
      this.data=data.items;
      console.log(this.data);
    
    })

  }
}
