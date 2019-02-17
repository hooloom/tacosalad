import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'headertext',
  templateUrl: './headertext.component.html',
  styleUrls: ['./headertext.component.css']
})
export class headertextComponent implements OnInit {
@Input() data: any;
headertext;
  constructor() { }

  ngOnInit() {
    this.headertext = this.data.pageroutes[0].components[0].componentelements[0].headertext;

  }

}
