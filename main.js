class Strings {
  static _language;

  static get(key) {
    return this._strings[this.getLanguage()][key] ?? key;
  }

  static getLanguage() {
    if (!this._language) {
      // TODO: get the language from cookies?
    }
    return this._language;
  }

  static setLanguage(lang) {
    this._language = lang;
    // TODO: create a language cookie?
  }

  static _strings = {
    pt: {

    },
    en: {

    }
  }
}

