import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent {
  @Input() students: Array<Object>;
  newStudentName: string = 'Random';
  addStudent() {
    this.students.push({name:this.newStudentName, date: new Date()});
    this.newStudentName = '';
  }
}
