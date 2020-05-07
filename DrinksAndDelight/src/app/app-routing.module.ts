import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchFormComponent } from './search-form/search-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent} from './home/home.component';
import {DistributorComponent } from './distributor/distributor.component';

const routes: Routes = [
  {
    path:'home', component:HomeComponent
  },
  
  
  {
    path:'SearchFrom', component:SearchFormComponent
  },
  {
    path:'ProductList', component:ProductListComponent 
  },

  {
    path:'Distributor', component:DistributorComponent 

  },


  {
    path:'',redirectTo:'/home',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
