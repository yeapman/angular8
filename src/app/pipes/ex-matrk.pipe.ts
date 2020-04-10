import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exMatrk'
})
export class ExMatrkPipe implements PipeTransform {

  transform(str: string): any {
    return `${str.trim()}!!!!`
  }

}
