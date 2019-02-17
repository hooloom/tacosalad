import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-advertisements',
  templateUrl: './advertisements.component.html',
  styleUrls: ['./advertisements.component.css']
})
export class advertisementsComponent implements OnInit {
@Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
