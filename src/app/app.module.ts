import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseCreateComponent } from './components/course-create/course-create.component';
import { CourseListComponent } from './components/course-list/course-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseCreateComponent,
    CourseListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
