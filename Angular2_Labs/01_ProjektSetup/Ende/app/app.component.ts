import {Component} from '@angular/core';


@Component({
    selector: 'wetter-app',
    template: `<header>
                    <h1> {{ titel }} </h1>
               </header> 
               `,
    styleUrls : ["./app/app.component.css"],
})
export class AppComponent { 
    city : string;
    
    constructor() {
        this.city = "Hello Angular!";
    }
    
}
