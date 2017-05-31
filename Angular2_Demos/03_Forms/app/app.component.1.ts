import { Component } from "@angular/core";

@Component({
    selector: 'meine-app',
    template: `
    <h1>Suchbegriff eingeben</h1>

    <input type='text' [(ngModel)]="user.name" #search="ngModel" required />
       
    <p>
       Input Status: {{ search.valid }}  
    </p>
    <p>
       Du suchst gerade nach: {{ user.name }}
    </p> 

    `
})
export class AppComponent {
    public user = {
        name: ""
    };
    
    constructor() { }
    
}