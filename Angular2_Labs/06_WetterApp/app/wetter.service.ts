import { Http} from '@angular/http';
import { Observable } from "rxjs/Rx";
import { IWetter} from './app.iwetter';
import { Injectable } from '@angular/core';


@Injectable()
export class WetterService {
    private wetterApiURL: string = "http://api.openweathermap.org/data/2.5/weather?appid=9d3ae54b4b75a62bd73707396325726e";
    
    constructor(private http:Http) {}
    
    getWetterUrl(city: string) {
        return this.wetterApiURL + "&q=" + city;
    }
    
    getWetter(city:string) {
        return new Observable(observable => {
            this.http.get(this.getWetterUrl(city))
            .map(res => res.json())
            .subscribe(res => {
                var wetter: IWetter = res.weather[0];
                wetter.city = city;
                wetter.temp = (res.main.temp - 273.15).toFixed(2);
                observable.next( wetter);
            });         
        });
    }
}
