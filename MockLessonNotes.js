function bakeCake(ingredients, typeOfCake) {
  const cake = typeOfCake;
  console.log(`The ingredients of my cake are: ${ingredients}`);
  console.log(`Your ingredients are now: ${cake}`);
  return cake;
}

const myAverageIngredients = "Flour, eggs, sugar and butter";
const myAverageCake = "Vanilla Cake";

const myFancyIngredients = "Almond meal, coconut oil, flaxseed, cacao";
const myFancyCake = "Gluten-Free Mud Cake";

bakeCake(myAverageIngredients, myAverageCake);
bakeCake(myFancyIngredients, myFancyCake);
const squareSideLength = 4;

const rectangleLength = 4;
const rectangleWidth = 8;

const addOneHundred = (n) => {
  console.log(`Before: ${n}`);
  n = n + 100;
  console.log(`After: ${n}`);
  return n;
};

addOneHundred(squareSideLength);
