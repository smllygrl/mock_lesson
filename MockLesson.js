const bakeCake = (ingredients, typeOfCake) => {
  const cake = typeOfCake;
  console.log(`The ingredients of my cake are: ${ingredients}`);
  console.log(`Your ingredients are now: ${cake}`);
  return cake;
};

const myIngredients = "Flour, eggs, sugar and butter";
const myCake = "Vanilla Cake";

const calsCake = "Chocolate Orange Cake";
const calsIngredients =
  "Fudge Frosting, poppyseeds, dark orange chocolate and flour";

bakeCake(myIngredients, myCake);
bakeCake(calsIngredients, calsCake);

const myAge = 102;

const gettingOlder = (age) => {
  const newAge = age + 1;
  console.log(`My new age is: ${newAge}`);
  return newAge;
};

const myNumber = 5;

const timesByFive = (number) => {
  const newNumber = number * 5;
}

// Subtract is -
// Plus is +
// Times is *
// Divide is /

gettingOlder(myAge);
