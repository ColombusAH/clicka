import {
  Component,
  ChangeDetectionStrategy,
  ContentChildren,
  QueryList,
  Input,
} from '@angular/core';
import { SidebarLinkDirective } from '../../directives';
import { Orientation } from '../../types';

@Component({
  selector: 'furrmans-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [' :host {position: relative;}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  @ContentChildren(SidebarLinkDirective, { read: SidebarLinkDirective })
  links!: QueryList<SidebarLinkDirective>;
  @Input() orientation: Orientation = 'rtl';
}
