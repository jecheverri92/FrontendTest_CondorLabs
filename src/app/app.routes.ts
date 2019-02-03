import { Routes, RouterModule } from '@angular/router';


import { ResultsComponent } from './components/results/results.component';
import { CoursesComponent } from './components/courses/courses.component';

const APP_ROUTES: Routes = [

    { path: 'home', component: CoursesComponent},
    { path: 'search/:termino', component: ResultsComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
    
];

export const APP_ROUTING =  RouterModule.forRoot(APP_ROUTES)
