import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'footer',
  template: `<div [footerdirective]="data" id="flex"></div>`,
  styleUrls: ['./footer.component.css']
})
export class footerComponent implements OnInit {
  @Input() data: any;
  constructor(private cdRef: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.cdRef.detectChanges();

  }

}
