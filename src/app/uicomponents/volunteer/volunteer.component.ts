import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class volunteerComponent implements OnInit {
@Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
