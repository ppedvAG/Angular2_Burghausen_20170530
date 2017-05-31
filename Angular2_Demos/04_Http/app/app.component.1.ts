import { Component } from "@angular/core";
import { Http } from "@angular/http";

@Component({
    selector: "meine-app",
    template: `     
    <h1> Daten anfordern </h1>

    <button (click)="holDaten()">Anfordern</button>
   `,
    providers: [ /*ServiceProviders*/ ]
})
export class AppComponent {
  
    http: Http;
    inhalt: any;

    constructor(http: Http) {
        this.http = http;
    }

    holDaten() {
        this.http.get("json.json").subscribe(res => {
            this.inhalt = res.json();
            this.inhalt.forEach((p,i) => {
                console.log(p);
            })
        });
    }
}