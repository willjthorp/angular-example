import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss']
})
export class StudentPageComponent implements OnInit {
  students = [{
    name: "fo",
    date: new Date()
  }, {
    name: "salfjlsdjflsdjkflsjldfj",
    date: new Date()
  }]
  replaceStudents() {
    // this.students =
  }
  constructor() { }

  ngOnInit() {
  }

}
