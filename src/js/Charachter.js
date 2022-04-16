export default class Character {
  constructor(options) {
    this.typeNames = [
      'Bowerman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];
    this.health = 100;
    this.level = 1;
    this.attack = options.attack ? options.attack : 0;
    this.defence = options.defence ? options.defence : 0;
    this.checkOptions(options);
  }

  checkOptions(options) {
    if (options.name.length < 2 || options.name.length > 10 || typeof options.name !== 'string') {
      throw new Error(`transmitted incorrect value ${options.name}`);
    } else {
      this.name = options.name;
    }

    if (!this.typeNames.some((item) => item === options.type) || typeof options.type !== 'string') {
      throw new Error(`transmitted incorrect value ${options.type}`);
    } else {
      this.type = options.type;
    }
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('You can\'t upgrade a deceased person\'s level');
    }
  }

  damage(points) {
    if (this.health <= 0) {
      throw new Error('You cannot inflict damage on a dead person');
    } else {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
