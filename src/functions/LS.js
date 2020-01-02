let terminal = {
  dark: true,
  saved: [],
  restaurants: {}
};

let appName = "menu-app";

export const LS = {
  init() {
    this.name = appName;
    let data = JSON.parse(localStorage.getItem(this.name));
    if (data !== null) {
      this.data = data;
    } else {
      this.data = terminal;
      this.save(this.data);
    }
  },
  save(data) {
    localStorage.setItem(this.name, JSON.stringify(data));
  }
};
