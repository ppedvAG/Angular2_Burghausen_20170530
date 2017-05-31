import { Injectable } from "@angular/core";

@Injectable()
export class SuchService {
    stadt: string = "Berlin";
    aStadt: Array<string> = [];

    constructor() {    }
    
    addStadt(uStadt: string) {
        this.aStadt.push(uStadt);
    }
    getAllStadt(){
        this.aStadt.forEach((p,i) => console.log(p,i));
    }
}