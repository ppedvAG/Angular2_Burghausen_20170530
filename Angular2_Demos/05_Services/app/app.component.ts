import { Component } from "@angular/core";
import { SuchService } from "./such.service";

@Component({
    selector: "reise-app",
    template: `     
    <h1> Wetter in deiner Stadt </h1>
    <p>Wettervorhersage für {{ stadt }}</p>

    <input type="text" #stadtName autofokus/>
    
    <button (click)="add2Array(stadtName)">Hinzuf&uuml;gen</button>
    <button (click)="getAll()">Zeig alle Wetter</button>
    <button (click)="dataRequest();" >DatenVomServer</button>
    `,
    providers: [ SuchService ]
})
export class AppComponent {
    stadt: string;
    suchservice: SuchService;

    constructor( suchservPara: SuchService) {
        this.stadt = "Burghausen";
        this.suchservice = suchservPara;
    }

    add2Array(stadtName) {
        this.suchservice.addStadt(stadtName.value);
    }
    getAll() {
        this.suchservice.getAllStadt();
    }
    dataRequest() {
        this.suchservice.holDaten();
    }
}