import { ActivatedRoute } from '@angular/router';
import { GetGeoService } from '../../services/getgeo.service';
import { viewsdataservice } from '../../services/viewsdata.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'set-view',
  template: `

            <ng-container>
              <div [ngSwitch]='route0$'>
                  <div *ngSwitchDefault>
                    <page-built [data]="viewData"></page-built>
                  </div>
              </div>
            </ng-container>
              `,
  styleUrls: ['./set-view.component.css']
})
export class setviewComponent implements OnInit {
  viewData: Observable<any>;
  route0$: any;
  route1$: any;
  route2$: any;
  realm;

  constructor(private route: ActivatedRoute,
    private view: viewsdataservice,
    private currentgeo: GetGeoService) { 
      this.realm = document.location.hostname;
      this.route.params.subscribe(params => {
        this.route0$ = params['parent'];
        this.route1$ = params['child'];
        this.route2$ = params['grandchild'];
      });
  
      this.viewData = this.view.loadContent();
    }

  ngOnInit() {
  
  }

}
