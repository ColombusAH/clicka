import { NgModule } from '@angular/core';
import { LayoutModule as BaseLayoutModule } from '@furmans/shred-ui';
import { FullLayoutComponent } from './components/full-layout/full-layout.component';

@NgModule({
  declarations: [FullLayoutComponent],
  imports: [ BaseLayoutModule],
  exports: [FullLayoutComponent],
})
export class LayoutModule {}
