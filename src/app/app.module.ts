import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { TitlecardComponent } from './titlecard/titlecard.component';
import { MatTableModule } from '@angular/material/table';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatTableModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatPaginatorModule,
    HttpClientModule
  ],
  declarations: [AppComponent, WrapperComponent, TitlecardComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
