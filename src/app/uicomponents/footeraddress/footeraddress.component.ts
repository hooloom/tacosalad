import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'footeraddress',
  templateUrl: './footeraddress.component.html',
  styleUrls: ['./footeraddress.component.css']
})
export class footeraddressComponent implements OnInit {
@Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
