import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthenticationService } from '../../auth/services/authentication.service';

@Component({
  selector: 'clicka-home',
  templateUrl: './home.component.html',
  styles: [':host { width: 100%;} '],
})
export class HomeComponent {
  profile$: Observable<unknown> = of(null);
  reports$: Observable<unknown> = of(null);
  constructor(private readonly authentication: AuthenticationService) {}


}
