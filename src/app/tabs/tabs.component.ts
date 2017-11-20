import { Component } from '@angular/core';

@Component({
  selector: 'tabs',
  template: `
      <kendo-tabstrip>
        <kendo-tabstrip-tab [title]="'Products Grid'" [selected]="true">
          <ng-template kendoTabContent>
            <p>
              <products-grid></products-grid>
            </p>
          </ng-template>
        </kendo-tabstrip-tab>
        <kendo-tabstrip-tab [title]="'Master Detail Grid'">
          <ng-template kendoTabContent>
            <p>
              <master-detail-grid></master-detail-grid>
            </p>
          </ng-template>
        </kendo-tabstrip-tab>
      </kendo-tabstrip>
    `,
    styles: [`
        kendo-tabstrip p {
            margin: 0;
            padding: 8px;
        }
    `]
})

export class TabsComponent {}