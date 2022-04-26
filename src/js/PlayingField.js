import goblinImg from '../img/goblin.png';

export default class PlayingField {
  constructor() {
    this.fieldSize = 4;
    this.fieldCells = [];
    this.field = document.querySelector('.field');
    this.prevIndex = -1;
  }

  create() {
    let i = 0;

    while (i < this.fieldSize ** 2) {
      const cell = document.createElement('div');

      cell.classList.add('cellField');
      cell.addEventListener('click', (e) => this.onClick(e.target));

      const fieldWidth = parseInt(
        window.getComputedStyle(this.field, null).width,
        10,
      );
      // .match(/\d+/)[0];
      const cellWidth = Math.round(fieldWidth / this.fieldSize) - 10;

      cell.style.width = `${cellWidth}px`;
      cell.style.height = `${cellWidth}px`;

      const img = document.createElement('img');

      img.classList.add('person');
      img.style.visibility = 'hidden';
      img.setAttribute('src', goblinImg);

      this.fieldCells.push(cell);
      this.field.appendChild(cell);

      cell.appendChild(img);

      i += 1;
    }

    this.showGoblin();

    setInterval(() => {
      this.showGoblin();
    }, 5000);
  }

  showGoblin() {
    const persons = this.field.querySelectorAll('.person');

    persons.forEach((person) => {
      const personItem = person;
      personItem.style.visibility = 'hidden';
    });

    const index = Math.floor(Math.random() * this.fieldCells.length);

    if (this.prevClick === index) {
      this.showGoblin();
      return;
    }

    this.fieldCells[index].firstChild.style.visibility = 'visible';
    this.prevClick = index;
  }
}
