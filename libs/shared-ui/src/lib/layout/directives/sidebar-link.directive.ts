import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[clickaSidebarItem]',
})
export class SidebarItemDirective<T = unknown> {
  @Input() data!: T;
  constructor(public template: TemplateRef<HTMLElement>) {}
}
