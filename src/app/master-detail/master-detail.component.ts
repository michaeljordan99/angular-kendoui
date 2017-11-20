import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import {
    GridComponent,
    GridDataResult,
    DataStateChangeEvent
} from '@progress/kendo-angular-grid';

import { SortDescriptor } from '@progress/kendo-data-query';

import { CategoriesService } from './northwind.service';

@Component({
    providers: [CategoriesService],
    selector: 'master-detail-grid',
    template: `
      <kendo-grid
          [data]="view | async"
          [pageSize]="pageSize"
          [skip]="skip"
          [sortable]="true"
          [sort]="sort"
          [pageable]="true"
          [height]="550"
          (dataStateChange)="dataStateChange($event)"
        >
        <kendo-grid-column field="CategoryID" width="100"></kendo-grid-column>
        <kendo-grid-column field="CategoryName" width="200" title="Category Name"></kendo-grid-column>
        <kendo-grid-column field="Description" [sortable]="false">
        </kendo-grid-column>
        <div *kendoGridDetailTemplate="let dataItem">
            <category-details [category]="dataItem"></category-details>
        </div>
      </kendo-grid>
  `
})

export class MasterDetailGridComponent {

    public view: Observable<GridDataResult>;
    public sort: Array<SortDescriptor> = [];
    public pageSize: number = 10;
    public skip: number = 0;

    @ViewChild(GridComponent) grid: GridComponent;

    constructor(private service: CategoriesService) { }

    public ngOnInit(): void {
        // Bind directly to the service as it is a Subject
        this.view = this.service;

        // Fetch the data with the initial state
        this.loadData();
    }

    public dataStateChange({ skip, take, sort }: DataStateChangeEvent): void {
        // Save the current state of the Grid component
        this.skip = skip;
        this.pageSize = take;
        this.sort = sort;

        // Reload the data with the new state
        this.loadData();
    }

    public ngAfterViewInit(): void {
        // Expand the first row initially
        this.grid.expandRow(0);
    }

    private loadData(): void {
        this.service.query({ skip: this.skip, take: this.pageSize, sort: this.sort });
    }
}
