import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterStudents'
})
export class FilterStudentsPipe implements PipeTransform {

  transform(value: any, length:number): any {

    return value.filter((item)=>{
      return item.name.length>length;
    });
  }

}
