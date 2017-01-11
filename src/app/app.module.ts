import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Red } from '../pages/red/red';
import { Blue } from '../pages/blue/blue';
import { Settings } from '../pages/settings/settings';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Red,
    Blue,
    Settings
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Red,
    Blue,
    Settings
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
