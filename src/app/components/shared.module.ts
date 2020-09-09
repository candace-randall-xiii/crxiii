import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageColumnComponent } from './image-column.component';
import { HeaderMainComponent } from './header-main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageHeaderComponent } from './page-header.component';

@NgModule({
  declarations: [
    ImageColumnComponent, 
    HeaderMainComponent, 
    PageHeaderComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
    
  ], 
  exports: [
    ImageColumnComponent, 
    HeaderMainComponent,
    PageHeaderComponent
  ]
})
export class SharedModule { }
