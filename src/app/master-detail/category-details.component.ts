import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { GridDataResult, GridComponent, PageChangeEvent } from '@progress/kendo-angular-grid';

import { ProductsService } from './northwind.service';

@Component({
    selector: 'category-details',
    providers: [ProductsService],
    template: `
      <kendo-grid
          [data]="view | async"
          [pageSize]="5"
          [skip]="skip"
          [pageable]="true"
          [scrollable]="'none'"
          (pageChange)="pageChange($event)"
        >
      <kendo-grid-column field="ProductID" title="Product ID" width="120">
      </kendo-grid-column>
      <kendo-grid-column field="ProductName" title="Product Name">
      </kendo-grid-column>
      <kendo-grid-column field="UnitPrice" title="Unit Price" format="{0:c}">
      </kendo-grid-column>
      </kendo-grid>
  `
})
export class CategoryDetailComponent implements OnInit {

    /**
     * The category for which details are displayed
     */
    @Input() public category: any;

    private view: Observable<GridDataResult>;
    private skip: number = 0;

    constructor(private service: ProductsService) { }

    public ngOnInit(): void {
        this.view = this.service;

        /*load products for the given category*/
        this.service.queryForCategory(this.category, { skip: this.skip, take: 5 });
    }

    protected pageChange({ skip, take }: PageChangeEvent): void {
        this.skip = skip;
        this.service.queryForCategory(this.category, { skip, take });
    }
}
