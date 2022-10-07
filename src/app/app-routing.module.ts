import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseCreateComponent } from './components/course-create/course-create.component';
import { CourseListComponent } from './components/course-list/course-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'course-list', pathMatch: 'full'},
  { path: 'course-create', component: CourseCreateComponent },
  { path: 'course-list', component: CourseListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
