import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

// import { SuchService } from "./such.service";

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ AppComponent ],
    providers: [ /* SuchService */ ],
    bootstrap: [ AppComponent ]
})
export class AppModule {  }