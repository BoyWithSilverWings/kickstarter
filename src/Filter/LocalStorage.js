const localStorage = window.localStorage;

class Storage {
  static getAll() {
    const filters = localStorage.getItem('filter');
    return JSON.parse(filters);
  }

  static set(key, value) {
    const filters = JSON.parse(localStorage.getItem('filter'))||{};
    filters[key] = value;
    localStorage.setItem('filter', JSON.stringify(filters));
  }

  static clear() {
    localStorage.clear();
  }
}

export default Storage;