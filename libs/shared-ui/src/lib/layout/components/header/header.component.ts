import { Component, ChangeDetectionStrategy, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'clicka-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @ContentChild(TemplateRef) template!: TemplateRef<unknown> ;
}
