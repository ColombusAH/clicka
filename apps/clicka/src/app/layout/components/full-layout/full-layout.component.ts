import { Component } from '@angular/core';
import { LanguageDirectionService } from '@clicka/shred-ui';

@Component({
  selector: 'clicka-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss'],
})
export class FullLayoutComponent {
  // to move - poc
  links: { path: string; text: string }[] = [
    { path: '/home', text: 'home' },
    { path: '/login', text: 'login' },
  ];

  constructor(
    private readonly languageDirectionService: LanguageDirectionService
  ) {}

  changeLanguageOrientation() {
    this.languageDirectionService.changeLanguageDirection();
  }
}
