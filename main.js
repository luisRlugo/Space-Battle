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
/*
//Creating Class Ship
class Ship {
  constructor(name, hull, firepower, accuracy) {
    this.name = name;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }
  // Attack method - Takes target parameter
  attack(target) {
    // Checking if the attack hits
    //based on the ships accuracy
    if (Math.random() < this.accuracy) {
      //the target's hull reduces by the firepower of attacking ship
      target.hull -= this.firepower;
      console.log(`${this.name} attacked ${target.name}!`);
      console.log(`${target.name} Hull: ${target.hull}`);
    } else {
      console.log(`${this.name} missed the attack!`);
    }

    // Checking if the target ship is destroyed by seeing if hull is less than or equal to 0
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

//created instances for subclass AlienShip and Spaceship
const enemyShip1 = new AlienShip("Xenomorph");
//console.log(enemyShip1);

const ownShip = new Spaceship("USS Per Scholas");
//console.log(ownShip);

let action = prompt(
  "What would you like to do? Enter 'fight' or 'retreat'."
).toLowerCase();

if (action === "fight") {
  //Simulate battle making ownShip attack first
  ownShip.attack(enemyShip1);
  //if enemyship hull is above 0 then enemyship attacks ownship
  if (enemyShip1.hull > 0) {
    enemyShip1.attack(ownShip);
  }
} else if (action === "retreat") {
  alert("GAME OVER!");
} else {
  alert("Invalid input, Refresh Page!");
}
*/
/****************************************************************** */

// Array.from() is a method in JavaScript that creates a new array instance from an array-like or iterable object.
//Array.form() To create an array of AlienShip instances.
//The first argument { length: 6 } specifies the length of the new array we want to create,which in this case is an array of length 6.
//The second argument () => new AlienShip() is a function that is called for each element in the new array.
//It returns a new instance of AlienShip for each element in the array

class Ship {
  constructor(name, hull, firepower, accuracy) {
    this.name = name;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }
  // Attack method - Takes target parameter
  attack(target) {
    // Checking if the attack hits
    //based on the ships accuracy
    if (Math.random() < this.accuracy) {
      //the target's hull reduces by the firepower of attacking ship
      target.hull -= this.firepower;
      console.log(`${this.name} attacked ${target.name}!`);
      console.log(`${target.name} Hull: ${target.hull}`);
    } else {
      console.log(`${this.name} missed the attack!`);
    }

    // Checking if the target ship is destroyed by seeing if hull is less than or equal to 0
    if (target.hull <= 0) {
      console.log("The ship is destroyed");
      return true;
    }
    return false;
  }
}

class Spaceship extends Ship {
  constructor(name = "USS Per Scholas", hull, firepower, accuracy) {
    super(name, hull, firepower, accuracy);
    this.hull = 20;
    this.firepower = 5;
    this.accuracy = 0.7;
  }
}

class AlienShip extends Ship {
  constructor(name = "Xenomorophs", hull, firepower, accuracy) {
    super(name, hull, firepower, accuracy);
    this.hull = Math.floor(Math.random() * (6 - 3 + 1) + 3); // hull value form 3 to 6
    this.firepower = Math.floor(Math.random() * (4 - 2 + 1) + 2); // between 2 to 4
    this.accuracy = Math.random() * 0.2 + 0.6; // accuracy between .6 and .8
  }
}

class Game {
  constructor(alienFleet) {
    this.name = new Spaceship();
    this.aliens = Array.from({ length: alienFleet }, () => new AlienShip());
    this.currentAlien = 0;
  }

  attack() {
    // Player attacks the current alien ship
    this.name.attack(this.aliens[this.currentAlien]);

    // Check if the current alien ship is destroyed
    if (this.aliens[this.currentAlien].hull <= 0) {
      // Move to the next alien ship or end the game if all ships are destroyed
      if (this.currentAlien === this.aliens.length - 1) {
        console.log(
          "You have destroyed all the alien ships and won the battle!"
        );
        return;
      } else {
        this.currentAlien++;
        console.log(
          `You have destroyed the current alien ship. ${
            this.aliens.length - this.currentAlien
          } more to go.`
        );
      }
    } else {
      // Alien ship attacks the player if it's still alive
      this.aliens[this.currentAlien].attack(this.name);

      // Check if the player's ship is destroyed
      if (this.name.hull <= 0) {
        console.log(
          "Game over! Your ship has been destroyed by the alien ships."
        );
        return;
      }
    }
    let action = prompt(
      "There is a space battle.... What would you like to do? Enter 'fight' or 'retreat'."
    ).toLowerCase();

    if (action === "fight") {
      //Simulate battle
      this.attack();
    } else if (action === "retreat") {
      alert("GAME OVER!");
    } else {
      alert("GAME OVER: Invalid input, Refresh Page!");
    }
  }
}

// Start the game
const game = new Game(6);
game.attack();
