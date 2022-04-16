import Character from './Charachter';

export default class Bowerman extends Character {
  constructor(options) {
    super({ ...options, type: 'Bowerman' });
    this.attack = 25;
    this.defence = 25;
  }
}
