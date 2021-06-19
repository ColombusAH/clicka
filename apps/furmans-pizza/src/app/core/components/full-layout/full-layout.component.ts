import { Component, Input } from '@angular/core';
import { OnChanges, SimpleChange, Orientation } from '@furmans/shred-ui';

@Component({
  selector: 'furrmans-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss'],
})
export class FullLayoutComponent {
  @Input()
  @OnChanges<Orientation>(
    (val: Orientation, change?: SimpleChange<Orientation>) => {
      console.log({ val });
      console.log({ change });
    }
  )
  languageOrientation: Orientation = 'rtl';

  changeLanguageOrientation() {
    this.languageOrientation =
      this.languageOrientation === 'rtl' ? 'ltr' : 'rtl';
  }
}
