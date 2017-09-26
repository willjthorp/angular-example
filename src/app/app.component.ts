import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Foo';
  name = 'Will';
  students = ['Phillly', 'Baby bys', 'Tania no Mania']
  replaceStudents() {
    this.students = ['foo', 'bar']
  }
}
