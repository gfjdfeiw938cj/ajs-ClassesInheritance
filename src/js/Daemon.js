import Character from './Charachter';

export default class Daemon extends Character {
  constructor(options) {
    super({ ...options, type: 'Daemon' });
    this.attack = 10;
    this.defence = 40;
  }
}
