import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";

// import { SuchService } from "./such.service";

@NgModule({
    imports: [ BrowserModule, FormsModule, HttpModule ],
    declarations: [ AppComponent ],
    providers: [ /* SuchService */ ],
    bootstrap: [ AppComponent ]
})
export class AppModule {  }