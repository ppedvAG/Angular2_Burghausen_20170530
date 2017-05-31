import { Component } from '@angular/core';
 
// Variante 2 
interface Dimensionen {
  width: string;
  height: string;
}

@Component({
  selector: 'meine-app',
  template: `
    <div [ngStyle]="{'width': elemWidth, 'height': elemHeight}"
          style="background-color: aqua"></div>
          
    ` /* Variante 2 */ + `
    <div [ngStyle]="dimensionen" 
          style="background-color: darkorchid"></div>
  `
})
export class AppComponent {
  elemWidth: string;
  elemHeight: string;

  // Variante 2 
  dimensionen: Dimensionen;

  constructor() {
    this.elemWidth = '100px';
    this.elemHeight = '100px';

    // Variante 2 
    this.dimensionen = {
      width: '100px',
      height: '100px'
    };
  }
}
