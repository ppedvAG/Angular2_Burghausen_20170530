import { Component } from "@angular/core";

@Component({
    selector: 'meine-app',
    styles: [
     `.box {
          width: 100px;
          height: 100px;        
          border: 1px solid black;
      }`,
     '.red { background-color: red; }',
     '.green { background-color: green; }'
   ],
   template: `
     <div class="box" [ngClass]="{red: box.isRed}"></div>
     <div class="box green" [ngClass]="{green: box.isGreen}"></div>
   `
 })
 export class AppComponent {
   box = {
     isRed: true,
     isGreen: false
   };
}