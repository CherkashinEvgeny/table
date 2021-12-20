import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HeaderCellRendererComponent } from './header/header-cell-renderer.component';
import { MaterialModule } from '../material.module';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialModule,
    ReactiveFormsModule,
    AgGridModule.withComponents({
      agColumnHeader: HeaderCellRendererComponent,
    }),
  ],
  declarations: [AppComponent, HeaderCellRendererComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
