///<reference path="../node_modules/@angular/platform-browser-dynamic/index.d.ts"/> 

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app.component';
import { BrickComponent } from './components/brick.component';

import { SortPipe } from './pipes/sort.pipe';
import { AuthorPipe } from './pipes/author.pipe';

import { PictureService } from './services/picture.service';
import { AuthService } from './services/auth.service';

@NgModule({
    imports: [
        BrowserModule,
        Ng2Bs3ModalModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        BrickComponent,
        SortPipe,
        AuthorPipe
    ],
    providers: [PictureService, AuthService],
    bootstrap: [AppComponent]
})

export class AppModule {}