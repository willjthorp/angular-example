import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Foo';
  page: string ;
  pages: Array<Object> = [{
    value:'school',
    label:'school'
  },{
    value:'student',
    label:'student'
  },{
    value:'books',
    label:'books'
  }]
  name = 'Will';
  show(page:string){
    this.page= page;
  }

}
