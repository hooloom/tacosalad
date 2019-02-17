import { viewsdataservice } from './../../services/viewsdata.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'maintenancemode',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class maintenanceComponent implements OnInit {
@Input() data: any;

  constructor(private vsd:viewsdataservice) { }

  ngOnInit() {
   console.log(this.vsd)
  }

}
