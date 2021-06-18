import {
  Component,
  ChangeDetectionStrategy,
  ContentChildren,
  QueryList,
  AfterContentInit,
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
export class SidebarComponent implements AfterContentInit {
  @ContentChildren(SidebarLinkDirective, {read: SidebarLinkDirective})
  links!: QueryList<SidebarLinkDirective>;
  @Input() orientation: Orientation = 'rtl';

  ngAfterContentInit(): void {
    console.log('[SidebarComponent] ngAfterContentInit');

    console.log(this.links.first.template);
  }
}
