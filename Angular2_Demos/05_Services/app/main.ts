import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app.module";

platformBrowserDynamic().bootstrapModule( AppModule )
    .then( success => console.log("Bootstrap erfolgreich"))
    .catch( error => console.error(error));