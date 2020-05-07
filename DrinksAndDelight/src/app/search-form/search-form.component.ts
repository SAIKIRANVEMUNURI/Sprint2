import { Component, OnInit } from '@angular/core';
import { JsonDataService } from '../json-data.service';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  list:any;
  


  constructor(private jsonService:JsonDataService) { }

  ngOnInit()
    {
      console.log("hello this is service invoked");
      this.jsonService.getAllProductOrders().subscribe(
        data=>{
          this.list=data;
        }
      )
    }

    SearchName:String;
    SearchName1:String;
    searchElement:any;
    searchElement1:any;
    val:boolean=false;
    search(){
      console.log("my search");
      this.val=true;
      this.searchElement=this.SearchName;
      this.searchElement1=this.SearchName1;
  }


}
