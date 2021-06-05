import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'furrmans-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [' :host {position: relative;}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {}
