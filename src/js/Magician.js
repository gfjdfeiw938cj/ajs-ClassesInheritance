import Character from './Charachter';

export default class Magician extends Character {
  constructor(options) {
    super({ ...options, type: 'Magician' });
    this.attack = 10;
    this.defence = 40;
  }
}
