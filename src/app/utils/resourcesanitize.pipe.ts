import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'resourcesanitize'
})
export class resourcesanitizerPipe implements PipeTransform {

  constructor(private sanitize: DomSanitizer) { }

  transform(value: any): any {
    const cleanURL = this.sanitize.bypassSecurityTrustUrl(value);
    return cleanURL;
  }

}