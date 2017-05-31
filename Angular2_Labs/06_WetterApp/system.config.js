/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
        // Zunächst konfiguriere SystemJS selbst über die Methode config() und übergebe ein Objekt mit den Konfigurationsparametern 
    SystemJS.config({
        // paths serve as alias...wenn wir intern über npm: sprechen ... diese dann innerhalb meines projektsetups in node_modules/ gesucht werden soll
        paths: {   
            "npm:": "node_modules/"
        },
        // map tells the System loader where to look for things
        // map sagt dem systemjs loader wo er bestimmte elemente zu finden hat,
        // wenn also irgendwann ein import über app gemacht wird....dann hat das nichts anderes zufolge als,
        // das systemjs automatisch in app dannach suchen soll und aus app die ...ladeprozesse starten soll
       
        map: {
            // Wenn ich irgendwo ein import über @angular core verwende ...dann sagen wir systemJs 
            // Hey! suche das ganze im pfad  npm: ...das bedeutet ( node_modules/ ) ...hier gibt es ein Unterordner 
            // @angular / core / bundels / und lade die core.umd.js  
            // Das war die Datei die wir uns gerade angeschaut haben....das war die bereits compilerte komprimierte bibi für Angular core entsprechen enthätllt...
            // our app is within the app folder
           
            app: "app",
            // angular bundles immer gleiche schreibweise... geht immer auf bundels zurück und laden uns die umd datei...
            // das sind die vorkomrimierte datei welhes alle src ele dann implementier als js code ..
            // weiterhin hab i das ganze gemacht für http router forms 
            
            "@angular/core": "npm:@angular/core/bundles/core.umd.js",
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
 //           '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
 //           '@angular/router/upgrade': 'npm:@angular/router/bundles/router-upgrade.umd.js',
               
            // other libraries
            // last but not least...auch für rxjs ..das hatten wir uns gerade auch angeschaut gehabt...       
            "rxjs": "npm:rxjs"
        },
            // bei  rxjs ganz interresant zu erkennen hab i hier über packages gesagt...das hier 
            // standardmäßig die JS erweiterung geladenwerden soll... wenn ein import statfindet    
            // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: "./main.js",
                defaultExtension: "js"
            },
            rxjs: {
                defaultExtension: "js"
            }
        }
    })
})(this);