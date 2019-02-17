import { flatten } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {
@Input() data: any;
  constructor() { }

  ngOnInit() {
    this.get2();
  }

  get() {
    const myArray=this.data.pageroutes;

    var obj;
    function flatObj(obj){
      return Object.keys(obj).reduce(function(acc, key){
        if(typeof obj[key] === "object"){
          acc = acc.concat(flatObj(obj[key]));
        }else{
            acc.push(obj[key]);
        }
        return acc;
      }, []);
    }

    var newMyArray = flatObj(myArray);
    console.log(newMyArray);
  }

  get2() {
    const myArray = this.data.pageroutes;

    const result = myArray.reduce((acc, { ...obj }) => {
      acc[obj.name] = obj;
      return acc;
    }, {});

    console.log(result);
  }
   

}