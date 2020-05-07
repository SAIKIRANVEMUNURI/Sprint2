import { Component, OnInit } from '@angular/core';
import { JsonDataService } from '../json-data.service';

@Component({
  selector: 'app-distributor',
  templateUrl: './distributor.component.html',
  styleUrls: ['./distributor.component.css']
})
export class DistributorComponent implements OnInit {
list:any;


constructor(private jsonService:JsonDataService) { }

ngOnInit(): void { }

/*****************************************************
*
*
**********************************************/
getListOfDistributors(){
  console.log("hello this is service invoked");
  this.jsonService.getDistributorDetails().subscribe(
    data=>{
      this.list=data;
    }
  )
}
}
