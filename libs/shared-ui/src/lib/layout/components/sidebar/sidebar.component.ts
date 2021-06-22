import {
  Component,
  ChangeDetectionStrategy,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { SidebarItemDirective } from '../../directives';

@Component({
  selector: 'clicka-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [' :host {position: relative;}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  @ContentChildren(SidebarItemDirective, { read: SidebarItemDirective })
  items!: QueryList<SidebarItemDirective>;

}
