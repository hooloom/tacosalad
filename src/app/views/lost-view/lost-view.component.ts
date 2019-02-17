import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lost-view',
  templateUrl: './lost-view.component.html',
  styleUrls: ['./lost-view.component.css']
})
export class lostviewComponent implements OnInit {
@Input () data: any;
  constructor() { }

  ngOnInit() {
  }

}
