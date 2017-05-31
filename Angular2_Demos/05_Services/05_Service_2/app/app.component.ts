import { SuchService } from './shared/such.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'wetter-app',
    template: `
    <h1>Wetter in deiner Stadt </h1>
    <p>Wettervorhersage für {{ stadt }}</p>

    <input type="text" #stadtInput autofokus/>

    <button (click)="add2Array(stadtInput)">Hinzuf&uuml;gen</button>
    <button (click)="getAll()">Zeig</button>
    <button (click)="dataRequest();"> Daten Anfragen </button>
    `,
    providers: [ SuchService ]
})
export class AppComponent implements OnInit {
    stadt: string;
    suchservice: SuchService;

    constructor(suchservPara: SuchService) {
         this.stadt = "Burghausen";
         this.suchservice = suchservPara;
    }

    add2Array(stadtNameInput: HTMLInputElement){
        this.suchservice.addStadt(stadtNameInput.value);
    }
    getAll() {
        this.suchservice.getAllStadt();
    }
    dataRequest() {
        this.suchservice.holDaten();
    }
    ngOnInit() {
        this.suchservice.getAllStadt();
    }
}