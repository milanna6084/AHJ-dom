import PlayingField from './PlayinField';

export default class Game {
  constructor() {
    this.field = new PlayingField();
  }

  init() {
    this.field.create();
  }
}
