import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class navbarComponent implements OnInit {
  @Input() data: any;
  
  constructor() { }

  ngOnInit() {
  }

}
