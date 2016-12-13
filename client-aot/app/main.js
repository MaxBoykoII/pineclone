import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../aot/app/app.module.ngfactory';
// enableProdMode();
// platformBrowserDynamic().bootstrapModule(AppModule);
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
//# sourceMappingURL=main.js.map