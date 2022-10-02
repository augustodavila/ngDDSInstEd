import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCourseComponent } from './components/create-course/create-course.component';
import { CourseListComponent } from './components/course-list/course-list.component';

const routes: Routes = [
  { path: 'create-course', component: CreateCourseComponent },
  { path: 'course-list', component: CourseListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
