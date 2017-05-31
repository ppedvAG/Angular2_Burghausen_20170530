import { Component } from "@angular/core";

@Component({
    selector: "meine-app",
    styles: [
        '.ng-invalid { border: 2px solid red; }',
        '.ng-dirty { border: 2px solid blue; }',
        '.ng-pristine { border: 2px solid yellow; }',
        '.ng-valid { border: 2px solid lime !important; }'
    ],
    template: `
    <form (ngSubmit)="onSubmit()" #form="ngForm" novalidate>

        <label> Username
            <input name=username [(ngModel)]="user.username" required />
        </label>
        <label> Password
            <input name=password [(ngModel)]="user.password" #testPw="ngModel" required minlength="10" />
        </label>
    
        <button type="submit" [disabled]="testPw.invalid">Senden</button>
        <button type="submit" [disabled]="form.invalid">Senden</button>

    </form>

`})
export class AppComponent {
    public user = {
        username: "",
        password: ""
    }
    constructor() {

    }
    onSubmit() {
        console.log(this.user);
    }
}