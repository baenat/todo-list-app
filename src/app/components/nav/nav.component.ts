import { Component, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from '../../shared/services/local-storage.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  languageDefault: string = 'en';

  locales = [
    {
      value: 'en',
      name: 'English'
    },
    {
      value: 'es',
      name: 'Español'
    }
  ];

  constructor(
    private translateService: TranslateService,
    private localStorageService: LocalStorageService
  ) {
    this.retrieveFromLocalStorage('language');
  }

  changeLanguage = (event: Event) => {
    if (event.target) {
      const language = (event.target as HTMLInputElement).value;
      this.translateService.use(language);
      this.saveToLocalStorage('language', language);
    }
  }

  retrieveFromLocalStorage(key: string) {
    this.languageDefault = (this.localStorageService.getItem(key))
      ? this.localStorageService.getItem(key)
      : this.languageDefault;

    this.translateService.use(this.languageDefault);
  }

  saveToLocalStorage(key: string, value: string) {
    this.localStorageService.setItem(key, value);
  }

}
