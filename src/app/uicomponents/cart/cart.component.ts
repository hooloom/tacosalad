import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class cartComponent implements OnInit {
@Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
