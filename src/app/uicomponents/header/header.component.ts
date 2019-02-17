import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'topheader',
  template: `
  <div id="flex">
  <div [headerdirective]="data" id="d"></div>
  </div>
`,
  styleUrls: ['./header.component.css']
})
export class headerComponent implements OnInit {

@Input() data: any;
constructor(
  private cdRef: ChangeDetectorRef) {
}

ngOnInit() {
    this.cdRef.detectChanges();
}



}
