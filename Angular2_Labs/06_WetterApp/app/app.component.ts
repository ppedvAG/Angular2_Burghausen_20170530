import {Component} from '@angular/core';
import {IWetter} from './app.iwetter';
import {WetterService} from './wetter.service';

@Component({
    selector: 'wetter-app',
    template: `<header>
                    <h1>Wetter App</h1>
               </header>
               <div class="content">
                    <input [(ngModel)]="city" (keyup)="addCity(city, $event)" placeholder="Search wetter in city">
                    <p *ngIf="errorMessage" class="error-message">{{ errorMessage }}</p>
                    <ul *ngFor="let wetter of wetterOfCities" class="wetter-card">
                            <li>
                                <h2>{{ wetter.city }}:</h2>
                                <ul>
                                    <li>Wetter Type: {{ wetter.main}}</li>
                                    <li>Description: {{ wetter.description }}</li>
                                    <li>Temperatur: {{ wetter.temp }}</li>
                                </ul>
                            </li>
                    </ul>
                </div>
               `,
    styleUrls : ["./app/app.component.css"],
    providers : [WetterService]
})
export class AppComponent { 
    public city:string;
    public cities:Array<string>;
    public wetterOfCities:Array< IWetter>;
    public errorMessage:string;
    
    constructor(private _wetterService: WetterService) {
        this.city = "";
        this.wetterOfCities = [];
    }
    
    addCity = function(city:string, $event) {
        if ($event.keyCode == 13) {     
            this._wetterService.getWetter(city)
                .subscribe(wetter => {
                    if (wetter) {
                    this.wetterOfCities.push(wetter);
                    this.errorMessage = undefined;
                } else {
                    var cityWithoutWetter = city;
                    this.errorMessage = "* Keine Wetterdaten für " + cityWithoutWetter;
                } 
                this.city = "";
                    
                });
        }
    }
}
