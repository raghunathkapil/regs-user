import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './modules/app.module';

var platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);