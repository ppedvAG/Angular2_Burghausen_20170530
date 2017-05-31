import {Component} from '@angular/core';

@Component({
    selector: 'meine-app',
    template: `
        <button (click)="welcome()"> {{ btnText }} </button>      
    `,
    styleUrls : ["./app/app.component.css"]
})
export class AppComponent { 

    public btnText:string;
    
    constructor() {
        this.btnText = "Sag Hallo Angular";     
    }
    
    welcome() {
        alert("Hallo Welt!");
    }
}
