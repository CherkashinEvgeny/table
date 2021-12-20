import { Component } from "@angular/core";
import {
  GridOptions,
} from 'ag-grid-community';
import { HeaderCellRendererComponent } from "./header/header-cell-renderer.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  public gridOptions: Partial<GridOptions> = {
    defaultColDef: {
      headerComponentFramework: HeaderCellRendererComponent,
    },
    columnDefs: new Array(10).fill(null).map((v, i) => ({
      field: `column-${i}`,
      flex: Math.floor(i / 3) + 1,
      minWidth: 150,
    })),
  }

  public rowData = new Array(100).fill(null).map((v, j) => (
    new Array(10).fill(null).reduce((acc, v, i) => {
      acc[`column-${i}`] = `value-${i}-${j}`
      return acc;
    }, {})
  ));

  public constructor() {
  }
}
