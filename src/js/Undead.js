import Character from './Charachter';

export default class Undead extends Character {
  constructor(options) {
    super({ ...options, type: 'Undead' });
    this.attack = 25;
    this.defence = 25;
  }
}
