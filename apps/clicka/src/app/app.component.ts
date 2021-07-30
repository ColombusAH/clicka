import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@clicka/api-interfaces';
import { OnChanges } from '@clicka/shred-ui';

@Component({
  selector: 'clicka-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}

  @OnChanges<string>((v, change) => {
    console.log(v);
  })
  @Input()
  name = 'masho';

  nameChanged() {
    console.log(this.name);
  }
}
