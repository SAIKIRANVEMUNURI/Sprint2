import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class JsonDataService {


  constructor(private httpClient:HttpClient){}


 getAllProductOrders() {
   return this.httpClient.get("http://localhost:8030/api/v1/getListOfProductOrderEntity");
    
   }

   getDistributorDetails(){
     return this.httpClient.get("http://localhost:8030/api/v1/getDistributors");
   }

 
}
