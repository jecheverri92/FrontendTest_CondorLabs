import { Component, OnInit,DoCheck  } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, DoCheck {

  data: any[] = [];
 

  constructor(private courses: CourseService,
              private router:Router) { 

  }

  ngOnInit() {

  }

  ngDoCheck(){

  }

  getCourse(termino:string){
    console.log(termino)
    this.router.navigate(['/search',termino]);
    return false;
  }


}
