import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class sidemenuComponent implements OnInit {
@Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
