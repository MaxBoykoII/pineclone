import { platformBrowser } from '@angular/platform-browser';
// import {enableProdMode} from '@angular/core';
import { AppModule } from './app.module';
import { AppModuleNgFactory } from '../aot/app/app.module.ngfactory';

// enableProdMode();
// platformBrowserDynamic().bootstrapModule(AppModule);

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);