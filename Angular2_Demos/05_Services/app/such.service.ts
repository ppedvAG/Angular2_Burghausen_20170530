import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class SuchService {

    stadt: string = "Mühldorf";
    aStadt: Array<string> = [];
    http: Http;
    testData: any;

    constructor(http: Http) {
        this.http = http;
    }

    addStadt(uStadt) {
        this.aStadt.push(uStadt);
        this.getAllStadt();
    }
    getAllStadt(){
        this.aStadt.forEach((p,i) => console.log(p,i));      
    }
    
    holDaten() {
        this.http.get("json.json").subscribe(res => {
           this.testData =  res.json();
           console.log(this.testData[0].id);
        });
    }
}