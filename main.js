// //creating own ship class
// class Ship {
//   constructor() {
//     this.name = "USS Assembly"; // defualt name, hull, firepower, accuracy
//     this.hull = 20;
//     this.firepower = 5;
//     this.accuracy = 0.7;
//   }
// }

// //creating 1 alien ship class
// class AlienShip {
//   constructor(name) {
//     this.name = name; // can name each alien ship
//     this.hull = Math.floor(Math.random() * (6 - 3 + 1) + 3); // hull value form 3 to 6
//     this.firepower = Math.floor(Math.random() * (4 - 2 + 1) + 2); // between 2 to 4
//     this.accuracy = Math.random() * 0.2 + 0.6; // accuracy between .6 and .8
//   }
// }

//Creating Class Ship
class Ship {
  constructor(name, hull, firepower, accuracy) {
    this.name = name;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }
  // Attack method
  attack(target) {
    // Checking if the attack hits
    if (Math.random() < this.accuracy) {
      console.log("The ship has been hit");
      target.hull -= this.firepower;
    } else {
      console.log("Missed");
    }

    // Checking if the target ship is destroyed
    if (target.hull <= 0) {
      console.log("The ship is destroyed");
      return true;
    }
    return false;
  }
}

class Spaceship extends Ship {
  constructor(name, hull, firepower, accuracy) {
    super(name, hull, firepower, accuracy);
    this.hull = 20;
    this.firepower = 5;
    this.accuracy = 0.7;
  }
}

class AlienShip extends Ship {
  constructor(name, hull, firepower, accuracy) {
    super(name, hull, firepower, accuracy);
    this.name = name; // can name each alien ship
    this.hull = Math.floor(Math.random() * (6 - 3 + 1) + 3); // hull value form 3 to 6
    this.firepower = Math.floor(Math.random() * (4 - 2 + 1) + 2); // between 2 to 4
    this.accuracy = Math.random() * 0.2 + 0.6; // accuracy between .6 and .8
  }
}

const enemyShip1 = new AlienShip("Xeno");
console.log(enemyShip1);

const ownShip = new Spaceship("USS Per Scholas");
console.log(ownShip);

//Simulate battle making ownShip attack first
ownShip.attack(enemyShip1);

//if enemyship hull is above 0 then enemyship attacks ownship
if (enemyShip1.hull > 0) {
  enemyShip1.attack(ownShip);
}

/****************************************************************** */
