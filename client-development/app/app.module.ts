///<reference path="../node_modules/@angular/platform-browser-dynamic/index.d.ts"/> 

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app.component';
import { BrickComponent } from './components/brick.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, BrickComponent],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {}