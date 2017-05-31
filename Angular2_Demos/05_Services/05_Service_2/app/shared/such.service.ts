import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

@Injectable()
export class SuchService {
    stadt: string = "Berlin";
    aStadt: Array<string> = ["Leipzig","Wien","Köln"];

    http: Http;
    inhalt: any;

    constructor(http: Http) {
        this.http = http;
    }
    
    addStadt(uStadt: string) {
        this.aStadt.push(uStadt);
    }
    getAllStadt(){
        this.aStadt.forEach((p,i) => console.log(p,i));
    }
    holDaten() {
        this.http.get("json.json").subscribe(res => {
           this.inhalt = res.json();
           this.inhalt.forEach((p,i) => console.log(p,i));;
        });
    }
}