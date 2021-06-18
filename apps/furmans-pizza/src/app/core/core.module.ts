import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@furmans/shred-ui';
import { FullLayoutComponent } from './components/full-layout/full-layout.component';



@NgModule({
  declarations: [
    FullLayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutModule
  ],
  exports: [
    FullLayoutComponent
  ]
})
export class CoreModule { }
