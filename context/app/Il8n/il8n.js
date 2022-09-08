// @flow

import I18n from 'react-native-i18n';

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true;

// English language is the main language for fall back:
I18n.translations = {
  en: require('./languages/en.json'),
  hi: require('./languages/hi.json'),
  zh: require('./languages/zh-HK.json'),
  de: require('./languages/de.json'),
  fr: require('./languages/fr-ca.json'),
};

let languageCode = I18n.locale.substr(0, 2);

// All other translations for the app goes to the respective language file:
switch (languageCode) {
  case 'hi':
    I18n.translations.hn = require('./languages/hi.json');
    break;
  case 'zh':
    I18n.translations.te = require('./languages/zh-HK.json');
    break;
  case 'en':
    I18n.translations.en = require('./languages/en.json');
    break;
  case 'de':
    I18n.translations.te = require('./languages/de.json');
    break;
  case 'fr':
    I18n.translations.en = require('./languages/fr-ca.json');
    break;
}
export default I18n;
