import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseUrl:string='https://api.cebroker.com/v2/search/courses/?expand=totalItems&pageIndex=1&pageSize=18&sortField=RELEVANCE&profession=36&courseType=CD_ANYTIME&courseName=violence&sortShufflingSeed=27'
  courses: any[] =[];

  constructor(private http: HttpClient) {
   }

   getCourses(page:number){
     return this.http.get(`https://api.cebroker.com/v2/search/courses/?expand=totalItems&pageIndex=${page}&pageSize=18&sortField=RELEVANCE&profession=36&courseType=CD_ANYTIME&sortShufflingSeed=27`)
   }
   
   getTopCourses(){
    return this.http.get("https://api.cebroker.com/v2/featuredCoursesProfession?profession=36")
  }

   searchCourses(termino:String,pag:number){
     return this.http.get(`https://api.cebroker.com/v2/search/courses/?expand=totalItems&pageIndex=${pag}&pageSize=18&sortField=RELEVA
     NCE&profession=36&courseType=CD_ANYTIME&sortShufflingSeed=27&courseName=${termino}`)
   }
}
