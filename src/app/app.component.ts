import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'inventory-app-root',
  template: `
          <app-budget></app-budget>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

}
