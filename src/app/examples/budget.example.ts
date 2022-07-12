import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-budget',
  template: `
          <h3 
          [ngStyle]="{
            'color':budget<=1000?'red':'black',
            'background-color':budget<=1000?'yellow':'transparent'}">
              My Budget: &#8361;{{budget}}
          </h3>
          <div class="inventory-app">
            (Products will go here soon)</div>`
})
export class BudgetExample {
  name = 'Angular ' + VERSION.major;
  budget = 200;
}
