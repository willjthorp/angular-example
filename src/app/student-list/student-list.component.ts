import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent {
  @Input() students: Array<string>;
  newStudentName: string = 'Random';
  addStudent() {
    this.students.push(this.newStudentName);
    this.newStudentName = '';
  }
}
