class Main {
  static _sectionPages;
  static _sectionButtons;

  static init() {
    this.buildNavigation();
  }

  static buildNavigation() {
    this._sectionPages = [];
    this._sectionButtons = [];

    const navigator = document.getElementById("navigator");
    for (let i = 0; i < Menu.length; i++) {
      let section = Menu[i];
      let page = this.buildSectionPage(section);
      let button = this.buildSectionButton(section, i);

      this._sectionPages.push(page);
      this._sectionButtons.push(button);

      navigator.appendChild(button);
    }

    this._sectionButtons[0].click();
  }

  static buildSectionButton(section, idx) {
    const icon = document.createElement("icon");
    icon.classList.add("material-symbols-outlined");
    icon.innerHTML = section.icon;

    const name = document.createElement("label");
    name.innerHTML = Strings.get(section.section);

    const column = document.createElement("div");
    column.appendChild(icon);
    column.appendChild(name);

    const button = document.createElement("button");
    button.classList.add("section-button");
    button.appendChild(column);
    button.onclick = () => this.selectSection(idx);
    return button;
  }

  static buildSectionPage(section) {
    const page = document.createElement("div");
    page.classList.add("section-page");

    for (let entry of section.content) {
      let title = document.createElement("div");
      title.classList.add("section-page-subSection");
      title.innerHTML = entry.subSection;
      page.appendChild(title);

      for (let product of entry.menu) {
        let name = document.createElement("name");
        name.innerHTML = product.name ?? "";

        let info = document.createElement("info");
        info.innerHTML = product.info ?? "";

        let price = document.createElement("value");
        price.innerHTML = product.price ? product.price + " €" : "";

        let row = document.createElement("div");
        row.classList.add("section-page-product");
        row.appendChild(name);
        row.appendChild(info);
        row.appendChild(price);
        page.appendChild(row);
      }
    }
    
    return page;
  }

  static selectSection(idx) {
    for (let button of this._sectionButtons) {
      button.classList.remove("section-button-selected");
    } 
    this._sectionButtons[idx].classList.add("section-button-selected");

    const screen = document.getElementById("screen");
    screen.innerHTML = "";
    screen.appendChild(this._sectionPages[idx]);
  }
}



class Strings {
  static _language;

  static get(key) {
    return this._strings[this.getLanguage()][key] ?? key;
  }

  static getLanguage() {
    if (!this._language) {
      // TODO: get the language from cookies?
      this._language = "pt";
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
