import { viewsdataservice } from 'src/app/services/viewsdata.service';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class contentComponent implements OnInit {
@Input() data: any;
  constructor(private vsd: viewsdataservice) { }

  ngOnInit() {
  }

}
