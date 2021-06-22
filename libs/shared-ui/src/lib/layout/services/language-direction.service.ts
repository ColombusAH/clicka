import { Inject, Injectable } from '@angular/core';
import { WINDOW } from '../../utils';
import { LanguageDirection } from '../types';

@Injectable({
  providedIn: 'root',
})
export class LanguageDirectionService {
  constructor(@Inject(WINDOW) private readonly window: Window) {}
  changeLanguageDirection() {
    const htmlObject = this.window.document.getElementsByTagName('html')[0];
    const currentDir = htmlObject.dir as LanguageDirection;
    htmlObject.dir = currentDir === 'rtl' ? 'ltr' : 'rtl';
  }
}
