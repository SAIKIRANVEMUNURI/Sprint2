import { Component, OnInit } from '@angular/core';
import { JsonDataService } from '../json-data.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


export class ProductListComponent implements OnInit {
 
  list:any;
  
  
  constructor(private jsonService:JsonDataService) { }

  ngOnInit(): void { }
  
/*****************************************************
*
*
**********************************************/
  getListOfProducts(){
    console.log("hello this is service invoked");
    this.jsonService.getAllProductOrders().subscribe(
      data=>{
        this.list=data;
      }
    )
  }
}
