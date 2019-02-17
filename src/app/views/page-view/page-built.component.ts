import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-built',
  template: `
  <div [pagebuilderdirective]="data"></div>
  `,
  styleUrls: ['./page-built.component.css']
})
export class pagebuiltComponent implements OnInit {
  @Input() data: Observable<any>;
  
  pagebuilderdirectiveComponent: any;
  

  constructor(private cdRef: ChangeDetectorRef) {
    //
  }

  ngOnInit() {
    this.cdRef.detectChanges();
    
  }

  
}
