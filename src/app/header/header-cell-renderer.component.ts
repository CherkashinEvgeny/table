import {
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { IHeaderAngularComp } from 'ag-grid-angular';
import { IAfterGuiAttachedParams, IHeaderParams } from 'ag-grid-community';

@Component({
  selector: 'app-header-cell-renderer-component',
  templateUrl: './header-cell-renderer.component.html',
  styleUrls: ['./header-cell-renderer.component.scss'],
})
export class HeaderCellRendererComponent implements IHeaderAngularComp {
  public params: IHeaderParams;

  public constructor(private cdRef: ChangeDetectorRef) {
    console.log('created');
  }

  public agInit(params: IHeaderParams): void {
    this.params = params;
  }

  public refresh(params: IHeaderParams): boolean {
    this.params = params;
    return true;
  }

  public afterGuiAttached?(params?: IAfterGuiAttachedParams): void {
  }
}
