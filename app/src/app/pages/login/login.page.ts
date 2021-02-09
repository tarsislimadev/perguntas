import { Component, OnInit } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { cordova } from '../../../../package.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  LOGIN_GOOGLE = 'google';

  constructor(private googlePlus: GooglePlus) {}

  ngOnInit() {}

  async onLoginClick(_, login) {
    switch (login) {
      case this.LOGIN_GOOGLE:
        await this.googleLogin();
        break;
    }
  }

  async googleLogin() {
    const { REVERSED_CLIENT_ID: webClientId } = cordova.plugins[
      'cordova-plugin-googleplus'
    ];
    const user = await this.googlePlus.login({ webClientId });
    console.log({ user });
  }
}
