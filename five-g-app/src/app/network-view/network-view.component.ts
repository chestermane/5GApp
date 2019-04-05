import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LocationsService } from '../service/locations.service';

@Component({
  selector: 'network-view',
  templateUrl: './network-view.component.html',
  styleUrls: ['./network-view.component.css']
})
export class NetworkViewComponent implements OnInit {
  // Mock data below.
  // obj1={network:"Atl",tower:"Tower 1",longitude:"10.00",latitude:"12.00",status:"Online",description:"No issues"}
  // obj2={network:"Atl",tower:"Tower 2",longitude:"-12.12",latitude:"-43.23",status:"Danger",description:"Capacity approaching max."}
  // elements=[this.obj1,this.obj2]

  // variables for actual data
  elements;
  message="Please select a network to view."; //default message
  @ViewChild('statusSelect') statusSelect:ElementRef;


  constructor(private service:LocationsService) { }

  ngOnInit() {
    // uncomment below if a default network should be selected on load.
    // this.service.getTowers("atl").subscribe(data=>{
    //   this.elements=data;
    // })
  }

  // called by buttons in template. calls service by passing network name as a string
  switchTable(loc){
    this.service.getTowers(loc).subscribe(data=>{
      this.elements=data;
      console.log("network-view.ts >>>>> Finding towers in "+loc)
      if(data.length>0){
        this.message="Towers found.";
      }
      else{
        this.message="No towers online"
      }
    })
  }

  // may need this here if allowing status change from table rather than map
  setStatus(id){
    console.log(id)
    console.log(this.statusSelect.nativeElement.value)
  }

}
