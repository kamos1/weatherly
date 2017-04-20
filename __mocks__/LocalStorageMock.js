class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key];
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  setLocal() {
    global.localStorage = new LocalStorageMock;
  }
};

const something = new LocalStorageMock;

export default something.setLocal();
