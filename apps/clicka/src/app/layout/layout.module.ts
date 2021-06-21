import { NgModule } from '@angular/core';
import { LayoutModule as BaseLayoutModule } from '@clicka/shred-ui';
import { FullLayoutComponent } from './components/full-layout/full-layout.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FullLayoutComponent],
  imports: [ BaseLayoutModule, SharedModule],
  exports: [FullLayoutComponent],
})
export class LayoutModule {}
