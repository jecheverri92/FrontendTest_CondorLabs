import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component'
import { SearchComponent } from './components/search/search.component';

import { CourseService } from './services/course.service';
import { HttpClientModule } from '@angular/common/http';

//Rutas
import { APP_ROUTING } from './app.routes';
import { ResultsComponent } from './components/results/results.component';
import { CourseComponent } from './components/course/course.component';
import { CoursesComponent } from './components/courses/courses.component';
import { TopCoursesComponent } from './components/top-courses/top-courses.component';

//Pipes
import { NoimagePipe } from './pipes/noimage.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    ResultsComponent,
    CourseComponent,
    CoursesComponent,
    TopCoursesComponent,
    NoimagePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    APP_ROUTING
  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
