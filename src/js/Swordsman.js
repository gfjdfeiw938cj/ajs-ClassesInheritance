import Character from './Charachter';

export default class Swordsman extends Character {
  constructor(options) {
    super({ ...options, type: 'Swordsman' });
    this.attack = 40;
    this.defence = 10;
  }
}
