//Lev 1_1
let person = ["Bruce", "Wayne", "Superreich"];

let friends = ["Farid", "Christian", "Sergio"];

let favoriteFood = ["Burger", "Sushi", "Mais-Käsebällchen"]


console.log(person, friends, favoriteFood );

//Lev 1_2

console.log(person[0]);
console.log(person[1]);
console.log(person[2]);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(favoriteFood[0]);
console.log(favoriteFood[1]);
console.log(favoriteFood[2]);


//Lev 1_3

console.log(person.length);
console.log(friends.length);
console.log(favoriteFood.length);


//Lev 1_4

let pushPerson = person.push("Batman", "Gotham-City");

console.log(person);
console.log(pushPerson);

let pushFriends = friends.push("Marzio", "Freddy");

console.log(friends);
console.log(pushFriends);

let pushFavoriteFood = favoriteFood.push("Pizza", "Currywurst");

console.log(favoriteFood);
console.log(pushFavoriteFood);


//Lev 1_5

let popPerson = person.pop();

console.log(person);
console.log(popPerson);


let popFriends = friends.pop();

console.log(friends);
console.log(popFriends);


let popFavoriteFood = favoriteFood.pop();

console.log(favoriteFood);
console.log(popFavoriteFood);


//Lev 1_6

let shiftPerson = person.shift();

console.log(person);
console.log(shiftPerson);


let shiftFriends = friends.shift();

console.log(friends);
console.log(shiftFriends);


let shiftFavoriteFood = favoriteFood.shift();

console.log(favoriteFood);
console.log(shiftFavoriteFood);


//Lev 1_7

let unshiftPerson = person.unshift("Magda", "Elvira");

console.log(person);
console.log(unshiftPerson);

let unshiftFriends = friends.unshift("Julia", "Lea");

console.log(friends);
console.log(unshiftFriends);

let unshiftFavoriteFood = favoriteFood.unshift("Leberkäse", "Spinat");

console.log(favoriteFood);
console.log(unshiftFavoriteFood);


//Lev 1_9

let countries =["Schweden", "Polen", "Italien", "Norwegen", "Griechenland"];

let sliceCountries = countries.slice(1, 3);

console.log(countries);
console.log(sliceCountries);


//Lev 1_10

const text = "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards."

const spiltText1 = text.split(",");

console.log(spiltText1);


const spiltText2 = text.split(" ");

console.log(spiltText2);

const spiltText3 = text.split("");

console.log(spiltText3);











