import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class categoriesComponent implements OnInit {
@Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
