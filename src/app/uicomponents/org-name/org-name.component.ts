import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'orgname',
  template:` <div>{{data|json}}</div>`,
  styleUrls: ['./org-name.component.css']
})
export class orgnameComponent implements OnInit {
@Input() data: any;

  constructor() { }

  ngOnInit() {
      console
  }

}
