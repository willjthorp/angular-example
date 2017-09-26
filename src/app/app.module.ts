import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { SchoolPageComponent } from './school-page/school-page.component';
import { FilterStudentsPipe } from './filter-students.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentCardComponent,
    StudentPageComponent,
    SchoolPageComponent,
    FilterStudentsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
