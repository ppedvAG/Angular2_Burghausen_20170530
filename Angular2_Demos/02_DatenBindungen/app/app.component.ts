import { Component } from "@angular/core";

@Component({
    selector: "databinding",
    styles: [
        ".roterRahmen {  border: 2px solid red; }"
    ],
    template: `
        <header [style.backgroundColor]="userLayout"> 
            <h1> {{ title }} </h1>

            <img [src]="imgUrl" alt="imgUrl">
    
            <h2> Ihr Urlaubsort: {{ uOrt.value || "Bitte Wählen" }} </h2>

            <div [class.roterRahmen]="isVisible">
        
            <input type="text" #uOrt [placeholder]="text">

    </div>

</header>

<button (click)="showHide()">Anzeige</button>
    `
})
export class DatabindingComponent {
    userLayout = "#444"
    title: string = "Urlaub132";
    imgUrl = "http://lorempixel.com/100/100/city";
    text = "Bitte ort Wählen";
    isVisible = true;

    constructor() { }

    showHide() {
        this.isVisible = !this.isVisible;
    }

}