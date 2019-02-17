import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[clearfocus]'
})
export class clearfocusDirective {
    constructor(el: ElementRef) {
       el.nativeElement.style.outline = 'none';
    }
}