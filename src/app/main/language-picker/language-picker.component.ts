import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { sortBy } from 'lodash';

import { Languages } from 'src/constants';
import { UserService } from 'src/app/shared-components/user.service';
import { ApiService } from './../../shared-components/services/api.service';

@Component({
  selector: 'app-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.less']
})
export class LanguagePickerComponent implements OnInit {

  @Input() selectedLanguage = 'en';
  @Output() languageChanged = new EventEmitter<string>();

  languages = [];

  constructor(
    private userService: UserService,
    private apiService: ApiService
  ) { }

  async ngOnInit() {

    // Get the current user
    const user = await this.userService.me();

    // Filter the user's languages by the ones they're allowed to use
    if (user?.config?.allowedLanguages) {
      this.languages = Languages.filter(lang => user.config.allowedLanguages.includes(lang.code));
    }

    // Sort by language name, not code.
    this.languages = sortBy(this.languages, 'name');

  }

  /**
   * Fired when the user changes their language
   */
  onLanguageChanged (selectedLang) {
    this.languageChanged.emit(this.selectedLanguage);
    const changedLang = selectedLang.split(':')[1];
    this.apiService.changeLanguage(changedLang);
  }

}
