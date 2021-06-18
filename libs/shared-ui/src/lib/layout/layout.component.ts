import {
  Component,
  ChangeDetectionStrategy,
  ComponentRef,
  ViewChild,
  Input,
} from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { Orientation } from './types';

@Component({
  selector: 'furrmans-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  @ViewChild(HeaderComponent) header!: ComponentRef<HeaderComponent>;

  @Input() orientation: Orientation = 'rtl';
}
