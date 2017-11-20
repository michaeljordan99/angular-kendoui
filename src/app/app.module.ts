import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { LayoutModule } from '@progress/kendo-angular-layout'
import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ProductsGridComponent } from './products/products-grid.component'
import { MasterDetailGridComponent } from './master-detail/master-detail.component'
import { CategoryDetailComponent } from './master-detail/category-details.component'

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ProductsGridComponent,
    MasterDetailGridComponent,
    CategoryDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    GridModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
