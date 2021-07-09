import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { PowerBiModule } from './power-bi/power-bi.module';

@NgModule({
  imports: [CommonModule, LayoutModule, PowerBiModule],
  exports: [LayoutModule, PowerBiModule],
})
export class SharedUiModule {}
