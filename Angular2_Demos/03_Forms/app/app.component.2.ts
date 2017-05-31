import { Component } from "@angular/core";

@Component({
  selector: 'meine-app',
  styles: [
      '.ng-invalid { border: 2px solid red; }',
      '.ng-valid { border: 2px solid lime; }'
    ],
  template: `
    <form #suchForm="ngForm" novalidate>

        <label for="username">Name</label>

        <input id="username" name="username" required 
               [(ngModel)]="user.name" 
               #userName="ngModel" />
        
        <br />
        
        <input type="radio" name="radioBtn" value="OK" [(ngModel)]="user.radio" #radioBtn="ngModel" required />

        <div [hidden]="userName.valid" >
            Name wird benötigt!
        </div>

        <button [disabled]="suchForm.invalid">Senden</button>
    </form>
  `
})
export class AppComponent {
  public user = {
    name: "",
    radio: ""
  };
}
/*
Beispiel 1: <input [(ngModel)]="user.firstName" name="first" required >
Beispiel 2: <input [(ngModel)]="user.lastName" [ngModelOptions]="{standalone: true}">
*/