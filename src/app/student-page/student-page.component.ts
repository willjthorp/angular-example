import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss']
})
export class StudentPageComponent implements OnInit {
  students = ['Phillly', 'Baby bys', 'Tania no Mania']
  replaceStudents() {
    this.students = ['foo', 'bar']
  }
  constructor() { }

  ngOnInit() {
  }

}
