import { Component, Input } from "@angular/core";

@Component({
    selector: "meine-app",
    template: `
                <h1>Angular2 - 2WayDataBinding</h1>

                <input type='text' [(ngModel)]="search" />
                <p>
                    Du suchst gerade nach {{ search }}
                </p>    

                <h1>Hello Welt</h1>
                <input type="text" (keyup)="onKeyUp($event)" 
                 onmousemove="console.warn(event)" 
                 [style.backgroundColor]="color" />

    `
})
export class AppComponent implements Input {
     public search = "";
     public color: string;

     constructor() {}

     onKeyUp(hallo) {
         console.log(hallo);
         console.log("keyup: " + this.color);
     }
     onInput(test) {
         this.color=test.target.value;
         console.warn(test);
         console.info(test.target);
     }
}