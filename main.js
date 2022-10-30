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
      let titleCol = document.createElement("div");
      titleCol.classList.add("section-page-subSection");
      page.appendChild(titleCol);

      let title = document.createElement("name");
      title.innerHTML = entry.subSection;
      titleCol.appendChild(title);

      if (entry.subSectionInfo) {
        let info = document.createElement("info");
        info.innerHTML = entry.subSectionInfo;
        titleCol.appendChild(info);
      }

      for (let product of entry.menu) {
        let nameCol = document.createElement("div");
        nameCol.classList.add("section-page-product-name");

        let name = document.createElement("name");
        name.innerHTML = product.name ?? "";
        nameCol.appendChild(name);

        if (product.info) {
          let info = document.createElement("info");
          info.innerHTML = product.info;
          name.appendChild(info);
        }

        if (product.description) {
          let description = document.createElement("description");
          description.innerHTML = product.description;
          nameCol.appendChild(description);
        }

        let price = document.createElement("value");
        price.innerHTML = product.price ? product.price + " €" : "";

        let row = document.createElement("div");
        row.classList.add("section-page-product");
        row.appendChild(nameCol);
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
    screen.scrollTo(0, 0);
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
