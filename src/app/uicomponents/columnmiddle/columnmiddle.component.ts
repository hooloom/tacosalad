import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'columnmiddle',
  templateUrl: './columnmiddle.component.html',
  styleUrls: ['./columnmiddle.component.css']
})
export class columnmiddleComponent implements OnInit {
@Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
