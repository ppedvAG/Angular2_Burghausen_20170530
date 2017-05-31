import { SuchService } from './such.service';
import { Component } from '@angular/core';

@Component({
    selector: 'wetter-app',
    template: `
    <h1>Wetter in deiner Stadt </h1>
    <p>Wettervorhersage für {{ stadt }}</p>

    <input type="text" #stadtInput autofokus/>

    <button (click)="add2Array(stadtInput)">Hinzuf&uuml;gen</button>
    <button (click)="AppComponent.suchservice.getAllStadt()">Zeig</button>
    `
})
export class AppComponent {
    stadt: string;
    suchservice: SuchService;

    constructor(suchservPara: SuchService) {
         this.stadt = "München";
         this.suchservice = suchservPara;
    }

    add2Array(stadtName: HTMLInputElement){
        this.suchservice.addStadt(stadtName.value);
    }
    getAll() {
        this.suchservice.getAllStadt();
    }
}