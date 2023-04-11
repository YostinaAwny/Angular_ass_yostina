import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prodPipe'
})
export class ProdPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
