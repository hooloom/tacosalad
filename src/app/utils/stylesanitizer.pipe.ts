import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'stylesanitize'
})
export class stylesanitizerPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(value: any): any {
   return this.sanitizer.bypassSecurityTrustStyle(value);
    
  }

}