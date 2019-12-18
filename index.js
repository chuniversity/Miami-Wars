let readlineSync = require("readline-sync");

let location = "Overtown";
let drugs = { Cocaine: 0, Weed: 0, Crystal: 0, Ecstacy: 0 };
let weapon = "knife";
let health = 100;
let money = 100;

function startGame() {
  console.log("=============================");
  console.log("      Miami Wars");
  console.log("=============================");
  console.log(
    "You've just been released from Miami Dade Corrections in Overtown. You have $100 in your pocket and a small pocket knife for defense. Press 1 to continue"
  );
  option = ["Play Game", "Quit"];
  index = readlineSync.keyInSelect(option, "What do you want to do?");
  console.log("Ok, " + option[index]);

  if (index === 0) {
    newGame();
  } else if (index === 1) {
  }
}

function newGame() {
  console.log("Health: ", health);
  console.log("Money: ", money);
  console.log("Location: ", location);
  console.log("Drugs: ", drugs);
  console.log("Weapon: ", weapon);
  option = ["Travel", "Buy Drugs", "Sell Drugs", "Go to the Club"];
  index = readlineSync.keyInSelect(option, "What do you want to do?");
  console.log("Ok, " + option[index]);
  if (index === 0) {
    // call travel function here
    console.log("Where would you like to go?");
    travel = ["Overtown", "Downtown", "Brickell", "Wywnood", "Little Havana"];
    locationIndex = readlineSync.keyInSelect(
      travel,
      "Where do you want to go?"
    );
    location = travel[locationIndex];
    console.log("Ok, going to " + travel[locationIndex]);
    newGame();
  } else if (index === 1) {
    // call buy drug function here
    console.log("What drugs do you want to buy?");
    buyDrugs = ["Cocaine", "Weed", "Crystal", "Ecstacy"];
    drugsIndex = readlineSync.keyInSelect(
      buyDrugs,
      "What drugs do you want to buy?"
    );
    drugs[buyDrugs[drugsIndex]] += 1;
    money -= Math.floor(Math.random() * 6) + 1;
    console.log("Ok, going to buy " + buyDrugs[drugsIndex]);
    newGame();
  } else if (index === 2) {
    // call sell drug function here
    console.log("What drugs do you want to sell?");
    sellDrugs = ["Cocaine", "Weed", "Crystal", "Ecstacy"];
    selldrugsIndex = readlineSync.keyInSelect(
      sellDrugs,
      "What drugs do you want to sell?"
    );
    drugs[sellDrugs[selldrugsIndex]] -= 1;
    money += Math.floor(Math.random() * 6) + 1;
    console.log("Ok, going to sell " + sellDrugs[selldrugsIndex]);
    newGame();
  } else if (index === 3) {
    // call goto club function here
    console.log("What club do you want to go to?");
    if (location === "Overtown") {
      nightClub = ["E11EVEN", "SQL"];
    } else if (location === "Downtown") {
      nightClub = ["SPACE", "Area 31"];
    } else if (location === "Brickell") {
      nightClub = ["Tucandela", "Blue Martini"];
    } else if (location === "Wynwood") {
      nightClub = ["El Patio", "Dirty Rabbit"];
    } else if (location === "Little Havana") {
      nightClub = ["Ball & Chain", "El Santo"];
    }
    nightClubIndex = readlineSync.keyInSelect(
      nightClub,
      "What do you want to do?"
    );
    clubOption = ["Sell Drugs", "Do Drugs", "Fight"];
    clubIndex = readlineSync.keyInSelect(
      clubOption,
      `What do you want to do at ${[nightClub[nightClubIndex]]}? `
    );
    if (clubIndex === 0) {
      // call sell drug function here
      if (Math.floor(Math.random() * (10 - 1 + 1)) + 1 > 7) {
        console.log("You got jumped while up in the club!!!");
        money -= Math.floor(Math.random() * (30 - 10 + 1)) + 10;
        health -= Math.floor(Math.random() * (30 - 10 + 1)) + 10;
        newGame();
      } else {
        console.log("What drugs do you want to sell?");
        sellDrugs = ["Cocaine", "Weed", "Crystal", "Ecstacy"];
        sellDrugsIndex = readlineSync.keyInSelect(
          sellDrugs,
          "What drugs do you want to sell?"
        );
        drugs[sellDrugs[sellDrugsIndex]] -= 1;
        money += Math.floor(Math.random() * (30 - 10 + 1)) + 10;
        console.log("Ok, going to sell " + sellDrugs[sellDrugsIndex]);
        newGame();
      }
      if (clubIndex === 1) {
        console.log("What drugs do you want to do?");
        doDrugs = ["Cocaine", "Weed", "Crystal", "Ecstacy"];
        doDrugsIndex = readlineSync.keyInSelect(
          doDrugs,
          "What drugs do you want to do?"
        );
        drugs[doDrugs[doDrugsIndex]] -= 1;
        health += Math.floor(Math.random() * (30 - 10 + 1)) + 10;
        console.log("You had a blast doing " + doDrugs[doDrugsIndex]);
        newGame();
      }
      if (clubIndex === 2) {
        if (Math.floor(Math.random() * (10 - 1 + 1)) + 1 > 5) {
          console.log("You got jumped while up in the club!!!");
          money -= Math.floor(Math.random() * (30 - 10 + 1)) + 10;
          health -= Math.floor(Math.random() * (30 - 10 + 1)) + 10;
          newGame();
        } else {
          console.log("You picked a fight with a rival gang member and won!!");
          money += Math.floor(Math.random() * (30 - 10 + 1)) + 10;
          newGame();
        }
      }
    }
  }
}

startGame();
