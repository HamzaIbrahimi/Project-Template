// import './css/normalize.css';
// import './css/style.css';
const person = {
  name: 'John',
  getName() {
    return this.name;
  },
};

const name = person?.getName?.();
