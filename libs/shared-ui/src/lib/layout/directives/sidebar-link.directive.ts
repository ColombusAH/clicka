import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[furrmansSidebarLink]',
})
export class SidebarLinkDirective {
  @Input() path?: string;
  // @Input() template?: TemplateRef<unknown>;
  constructor(public template: TemplateRef<HTMLElement>) {}
}
