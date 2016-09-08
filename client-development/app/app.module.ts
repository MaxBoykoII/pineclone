///<reference path="../node_modules/@angular/platform-browser-dynamic/index.d.ts"/> 

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './components/app.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [App],
    providers: [],
    bootstrap: [App]
})

export class AppModule {}