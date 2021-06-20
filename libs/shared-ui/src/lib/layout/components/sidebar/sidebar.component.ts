import {
  Component,
  ChangeDetectionStrategy,
  ContentChildren,
  QueryList,
  Input,
} from '@angular/core';
import { SidebarItemDirective } from '../../directives';
import { Orientation } from '../../types';

@Component({
  selector: 'furrmans-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [' :host {position: relative;}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  @ContentChildren(SidebarItemDirective, { read: SidebarItemDirective })
  items!: QueryList<SidebarItemDirective>;
  @Input() orientation: Orientation = 'rtl';
}
