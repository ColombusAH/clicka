import { Component } from '@angular/core';
import { LanguageDirectionService } from '@clicka/shred-ui';

@Component({
  selector: 'clicka-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss'],
})
export class FullLayoutComponent {

  constructor(
    private readonly languageDirectionService: LanguageDirectionService
  ) {}

  changeLanguageOrientation() {
    this.languageDirectionService.changeLanguageDirection();
  }
}
