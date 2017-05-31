import { Component } from "@angular/core";

@Component({
    selector: "meine-app",
    template: `
    
     <h2> Strukturelle Direktive - *ngIf // *ngElse // *ngElseIf </h2>
     <div *ngIf="anzeigeName">
       <p> Mein Name ist Max Mustermann </p>
     </div>


     <h2> Strukturelle Direktive - *ngFor="let item of itemArray; </h2>
     <ul>
        <li> Index der ngFor-Elemente in der View anzeigen; let i = index" </li>
        <li> Gerade/ungerade ngFor-Elemente unterscheiden; let isOod = odd; let isEven = even" </li>
        <li> Odd/Even <ul>
                <li *ngFor="let user of users; let isEven = even; let isOdd = odd"
                    [ngClass]="{red: isOdd, green: isEven}">
                    Name: {{user.firstname}} {{user.lastname}}
                </li>
             </ul>
        </li>
    </ul>

    <div *ngFor="let wert of werteArray; let aktuellerIndex=index">
            Aktuelle Zahl ist: {{wert}} ({{ aktuellerIndex }})
    </div>


     <h2> Strukturelle Direktive - [ngSwitch] // *ngSwitchCase // *ngSwitchDefault </h2>
     <p> Angular nutzt für den Vergleich === </p> 

     <div [ngSwitch]="color">
        <p>Was ist deine Farbe?</p>
        <p *ngSwitchCase="'blue'">Ich bin blau</p>
        <p *ngSwitchCase="'red'">Ich bin rot</p>
        <p *ngSwitchDefault>Ich weis nicht</p>
     </div>
    `
})
export class AppComponent {
    public color = "blue";
    public anzeigeName = true;
    public werteArray = [1,3,3,7];
    
    constructor() {}
    
}