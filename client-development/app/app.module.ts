///<reference path="../node_modules/@angular/platform-browser-dynamic/index.d.ts"/> 

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import { AppComponent } from './components/app.component';
import { BrickComponent } from './components/brick.component';

@NgModule({
    imports: [BrowserModule, Ng2Bs3ModalModule],
    declarations: [AppComponent, BrickComponent],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {}