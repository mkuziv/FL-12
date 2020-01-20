let Fighter = function (obj) {
  const max = 100;
  let name = obj.name;
  let damage = obj.damage;
  let currentHp = obj.hp;
  let strength = obj.strength;
  let agility = obj.agility;
  let win = 0;
  let loss = 0;

  this.getName = () => name; 

  this.getDamage = () => damage;

  this.getHealth = () => currentHp;  

  this.getStrength = () => strength; 

  this.getAgility = () => agility;  

  this.attack = function (defFighter) {

    let currentAttack = Math.floor(Math.random() * (max + 1));
    let successProbability = max - (defFighter.getAgility() + defFighter.getStrength());
    
    if (currentAttack <= successProbability && defFighter.getHealth('defFighter') > 0) {
      defFighter.dealDamage(this.getDamage());
      console.log(`${this.getName()} makes ${this.getDamage()} to ${defFighter.getName()}`)
    } else {
      console.log(`${this.getName()} attack missed`);
    }
  }

  this.logCombatHistory = function () {
    console.log(`Name: ${this.getName()}, Wins: ${win}, Losses: ${loss} `);
  }

  this.heal = function (health) {
    if (currentHp + health < obj.hp) {
      currentHp += health;
    } else {
      currentHp = obj.hp;
    }
  }

  this.dealDamage = function (hpDamage) {
    if (this.getHealth() - hpDamage < 0) {
      currentHp = 0;
    } else {
      currentHp -= hpDamage;
    }
  }

  this.addWin = () => win++;
  
  this.addLoss = () => loss++;
  
}

function battle(firstFighter, secondFighter) {
  if (firstFighter.getHealth() <= 0) {
    console.log(`${firstFighter.getName()} is dead and can't fight`);
    return;
  }

  if (secondFighter.getHealth() <= 0) {
    console.log(`${secondFighter.getName()} is dead and can't fight`);
    return;
  }

  let objAttack = true;

  while (firstFighter.getHealth() > 0 && secondFighter.getHealth() > 0) {
    if (objAttack) {
      firstFighter.attack(secondFighter);
    } else {
      secondFighter.attack(firstFighter);
    }
    objAttack = !objAttack;
  }

  if (firstFighter.getHealth() <= 0) {
    firstFighter.addLoss();
    secondFighter.addWin();
    console.log(`${secondFighter.getName()} has won!`);
  } else {
    firstFighter.addWin();
    secondFighter.addLoss();
    console.log(`${firstFighter.getName()} has won!`)
  }
}
const fighter1 = new Fighter({ name: 'Maximus', damage: 25, hp: 100, strength: 20, agility: 15 });
const fighter2 = new Fighter({ name: 'Commodus', damage: 20, hp: 100, strength: 25, agility: 15 });