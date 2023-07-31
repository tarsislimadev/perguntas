#!/bin/bash

# NPM 6
sudo npm install -g npm@6

# Ionic
sudo npm install -g @angular/cli@11.0.7 @ionic/cli native-run cordova cordova-res

# Firebase tools
npm install -g firebase-tools

# Angular in Ionic
npm install --save @ionic/angular
ng add @ionic/angular

# Elements for PWA
npm install --save @ionic/pwa-elements

# Data Storage
ionic cordova plugin add cordova-sqlite-storage
npm install --save @ionic/storage

# Cordova Google Plus SDK plugin (https://ionicthemes.com/tutorials/about/ionic-google-login)
ionic cordova plugin add cordova-plugin-googleplus --save --variable REVERSED_CLIENT_ID=YOUR_REVERSE_CLIENT_ID
npm install --save @ionic-native/google-plus

# Cordova Plugins
npm install --save cordova-plugin-device@2.0.2
npm install --save cordova-plugin-ionic-keyboard
npm install --save cordova-plugin-ionic-webview
npm install --save cordova-plugin-splashscreen@5.0.2
npm install --save cordova-plugin-statusbar@2.4.2
npm install --save cordova-plugin-whitelist@1.3.3
