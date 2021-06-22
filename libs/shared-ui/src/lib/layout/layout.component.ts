import {
  Component,
  ChangeDetectionStrategy,
  ComponentRef,
  ViewChild,
} from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
@Component({
  selector: 'clicka-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  @ViewChild(HeaderComponent) header!: ComponentRef<HeaderComponent>;
}
