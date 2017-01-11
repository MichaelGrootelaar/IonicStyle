import { Component } from '@angular/core';

import { SettingsService } from './settingsService';
/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class Settings {
  selected: String;
  availableThemes: {className: string, prettyName: string}[];

  constructor(private _settings: SettingsService) {
    // now we're setting the selected property asynchronously, based
    // on the behavior of our observable theme in SettingsService
    this._settings.getTheme().subscribe(val => this.selected = val);
    // similarly, as promised, we've moved availableThemes to SettingsService,
    // and therefore need to call that property here
    this.availableThemes = this._settings.availableThemes;
  }

  // We're finally wiring in some change communication, which will allow us to
  // interact with our form, and see some changes in the theme.
  public setTheme(e) {
    this._settings.setTheme(e);
  }
}
