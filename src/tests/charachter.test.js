import Character from '../js/Charachter';
import Daemon from '../js/Daemon';

let char;

beforeEach(() => {
  char = new Daemon({ name: 'Nero' });
});

describe('Class Character: ', () => {
  const errorOptions = [
    {},
    { name: 'name' },
    { name: 1 },
    { type: 'unknown' },
    { type: 1 },
    { type: 1, name: 1 },
    { type: 'unknown', name: '1' },
    { type: 'unknown', name: '12345678910' },
    { type: 'Undead', name: '12345678910' },
    { type: 'Undead', name: '1' },
  ];

  test.each(errorOptions)('should return Error', (item) => {
    expect(() => {
      new Character(item);
    }).toThrow(Error);
  });

  test('should has correct attack and damage', () => {
    const ranger = new Character({ name: 'Lego', type: 'Bowerman' });
    expect(ranger.attack).toBe(0);
    expect(ranger.defence).toBe(0);

    const daemon = new Character({
      name: 'Nero',
      type: 'Daemon',
      attack: 50,
      defence: 50,
    });
    expect(daemon.attack).toBe(50);
    expect(daemon.defence).toBe(50);
  });
});

describe('Subclasses: ', () => {
  test('levelUp should correctly change options', () => {
    char.health = 50;
    char.levelUp();
    expect(char.level).toBe(2);
    expect(char.health).toBe(100);
    expect(char.attack).toBe(12);
    expect(char.defence).toBe(48);

    char.health = 0;
    expect(() => char.levelUp()).toThrow(Error);
  });

  test('damage should correctly change health', () => {
    char.damage(10);
    expect(char.health).toBe(94);
  });

  test('damage should throw error', () => {
    char.health = 0;
    expect(() => char.damage(100)).toThrow();
  });
});
