import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/shared-components/user.service';
import { User } from 'src/app/shared-components/user';

@Component({
  selector: 'app-main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  user:User

  constructor(public userService: UserService) { }

  async ngOnInit() {
    this.user = await this.userService.me();
  }

  onUserChangedClient (newClient:number) {
    const prefs = this.userService.preferences;
    prefs.lastClientId = newClient;
    this.userService.preferences = prefs;
  }

  onUserChangedLanguage (newLanguage:string) {
    const prefs = this.userService.preferences;
    prefs.language = newLanguage;
    this.userService.preferences = prefs;
  }

  onUserChangedContentType (newContentType:string) {
    const prefs = this.userService.preferences;
    prefs.lastContentType = newContentType;
    this.userService.preferences = prefs;
  }

}
