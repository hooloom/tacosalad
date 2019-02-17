import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'columnright',
  templateUrl: './columnright.component.html',
  styleUrls: ['./columnright.component.css']
})
export class columnrightComponent implements OnInit {
@Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
