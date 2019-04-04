import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'network-view',
  templateUrl: './network-view.component.html',
  styleUrls: ['./network-view.component.css']
})
export class NetworkViewComponent implements OnInit {
  obj1={network:"Atl",tower:"Tower 1",longitude:"10.00",latitude:"12.00",status:"Online",description:"No issues"}
  obj2={network:"Atl",tower:"Tower 2",longitude:"-12.12",latitude:"-43.23",status:"Danger",description:"Capacity approaching max."}
  elements=[this.obj1,this.obj2]
  constructor() { }

  ngOnInit() {
  }

}
