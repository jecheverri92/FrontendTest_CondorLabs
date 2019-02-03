import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images:string): string {
    if(images==''){
      return 'assets/noimage.png'
    }
    
      return images;
  
  }

}
