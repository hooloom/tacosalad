import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.css']
})
export class archivesComponent implements OnInit {
@Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
