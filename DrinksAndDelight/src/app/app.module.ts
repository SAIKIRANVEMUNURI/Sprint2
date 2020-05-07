import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { DataSearchPipe } from './data-search.pipe';
import { HomeComponent } from './home/home.component';
import { DistributorComponent } from './distributor/distributor.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    ProductListComponent,
    DataSearchPipe,
    HomeComponent,
    DistributorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
