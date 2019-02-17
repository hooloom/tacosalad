import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-minicart',
  templateUrl: './minicart.component.html',
  styleUrls: ['./minicart.component.css']
})
export class minicartComponent implements OnInit {
@Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
