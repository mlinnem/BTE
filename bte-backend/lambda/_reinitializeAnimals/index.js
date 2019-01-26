var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

var io = new AWS.DynamoDB.DocumentClient({apiVersion: '2018-10-01'});


exports.handler = async (event) => {
    var allThePuts = [];
    console.log("For each animal...");
    console.log(event.ThisIsReal);
    if (event.ThisIsReal) {
        for (var animal of animalsZero) {
            var put_params = {
                TableName : "Animals",
                Item : animal
            };
            console.log("Make the animal this:");
            console.log(put_params);
            allThePuts.push(io.put(put_params).promise());
        }

        await Promise.all(allThePuts);
    }
};

var animalsZero = [
  {
    "ID": 0,
    "Name" : "African Elephant",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 1,
    "Name" : "Alligator",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 2,
    "Name" : "Aphid",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 3,
    "Name" : "Armadillo",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 4,
    "Name" : "Atlas Beetle",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 5,
    "Name" : "Badger",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 6,
    "Name" : "Bald Eagle",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 7,
    "Name" : "Beaver",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 8,
    "Name" : "Bighorn Sheep",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 9,
    "Name" : "Bison",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 10,
    "Name" : "Black Widow Spider",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 11,
    "Name" : "Bluejay",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 12,
    "Name" : "Boa Constrictor",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 13,
    "Name" : "Boar",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 14,
    "Name" : "Box Turtle",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 15,
    "Name" : "Butterfly",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 16,
    "Name" : "Camel",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 17,
    "Name" : "Capybara",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 18,
    "Name" : "Chameleon",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 19,
    "Name" : "Cheetah",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 20,
    "Name" : "Chipmunk",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 21,
    "Name" : "Cow",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 22,
    "Name" : "Crab",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 23,
    "Name" : "Deer",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 24,
    "Name" : "Dragonfly",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 25,
    "Name" : "Electric Eel",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 26,
    "Name" : "Emperor Scorpion",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 27,
    "Name" : "Fire Ant",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 28,
    "Name" : "Flamingo",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 29,
    "Name" : "Flying Squirrel",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 30,
    "Name" : "Fox",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 31,
    "Name" : "Galapagos Tortoise",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 32,
    "Name" : "Giraffe",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 33,
    "Name" : "Golden Eagle",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 34,
    "Name" : "Goose",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 35,
    "Name" : "Gorilla",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 36,
    "Name" : "Great Horned Owl",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 37,
    "Name" : "Great White Shark",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 38,
    "Name" : "Green Frog",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 39,
    "Name" : "Green Snake",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 40,
    "Name" : "Grizzly Bear",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 41,
    "Name" : "Gull",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 42,
    "Name" : "Hermit Crab",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 43,
    "Name" : "Hippopotamus",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 44,
    "Name" : "Honey Bee",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 45,
    "Name" : "Horned Rattlesnake",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 46,
    "Name" : "Hornet",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 47,
    "Name" : "Horse",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 48,
    "Name" : "Human",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 49,
    "Name" : "Hummingbird",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 50,
    "Name" : "Hyena",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 51,
    "Name" : "Kangaroo",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 52,
    "Name" : "Killer Whale",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 53,
    "Name" : "King Cobra",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 54,
    "Name" : "Koala",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 55,
    "Name" : "Komodo Dragon",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 56,
    "Name" : "Ladybug",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 57,
    "Name" : "Leopard",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 58,
    "Name" : "Lion",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 59,
    "Name" : "Llama",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 60,
    "Name" : "Lynx",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 61,
    "Name" : "Marlin",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 62,
    "Name" : "Mongoose",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 63,
    "Name" : "Moose",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 64,
    "Name" : "Mosquito",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 65,
    "Name" : "Mountain Goat",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 66,
    "Name" : "Norway Rat",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 67,
    "Name" : "Octopus",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 68,
    "Name" : "Opossum",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 69,
    "Name" : "Ostrich",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 70,
    "Name" : "Otter",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 71,
    "Name" : "Pelican",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 72,
    "Name" : "Peregrine Falcon",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 73,
    "Name" : "Polar Bear",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 74,
    "Name" : "Praying Mantis",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 75,
    "Name" : "Raccoon",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 76,
    "Name" : "Raven",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 77,
    "Name" : "Rhinoceros",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 78,
    "Name" : "Roly Poly",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 79,
    "Name" : "Rooster",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 80,
    "Name" : "Sasquatch",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 81,
    "Name" : "Scarlet Macaw",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 82,
    "Name" : "Shoebill",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 82,
    "Name" : "Sloth",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 82,
    "Name" : "Snail",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 82,
    "Name" : "Spider Monkey",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 83,
    "Name" : "Squirrel",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 84,
    "Name" : "Tarantula",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 85,
    "Name" : "Tasmanian Devil",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 86,
    "Name" : "Tiger",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 87,
    "Name" : "Toad",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 88,
    "Name" : "Vulture",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 89,
    "Name" : "Walrus",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 90,
    "Name" : "Water Buffalo",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 91,
    "Name" : "Wolf",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 92,
    "Name" : "Woodpecker",
    "Wins" : 0,
    "Losses" : 0
  },
  {
    "ID": 93,
    "Name" : "Zebra",
    "Wins" : 0,
    "Losses" : 0
  },
]
