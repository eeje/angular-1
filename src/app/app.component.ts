import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'inventory-app-root',
  template: `
          <h3 
          [ngStyle]="{
            'color':budget<=1000?'red':'black',
            'background-color':budget<=1000?'yellow':'transparent'}">
              My Budget: &#8361;{{budget}}
          </h3>
          <div class="inventory-app">
            (Products will go here soon)</div>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  budget = 1500;
}
