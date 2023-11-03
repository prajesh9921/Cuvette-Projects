const ListAllItems = (data) => {
  // // Q] list all the food items?
  console.log("Q] list all the food items?");
  // // Way 1
  console.log(data);
  // // Way 2
  data.map((item) => console.log(item));
};

const AllVegetabled = (data) => {
  // Q] list all the food items with category vegetables?
  console.log("Q] list all the food items with category");
  data.filter((item) => item.category === "Vegetable" && console.log(item));
};

const AllFruits = (data) => {
  // Q] list all the food items with category fruit?
  console.log("Q] list all the food items with category fruit?");
  data.filter((item) => item.category === "Fruit" && console.log(item));
};

const AllProtients = (data) => {
  // Q] list all the food items with category protien?
  console.log("Q] list all the food items with category protien?");
  data.filter((item) => item.category === "Protein" && console.log(item));
};

const AllNuts = (data) => {
  // Q] list all the food items with category nuts?
  console.log("Q] list all the food items with category nuts?");
  data.filter((item) => item.category === "Nuts" && console.log(item));
};

const AllGrains = (data) => {
  // Q] list all the food items with category grains?
  console.log("Q] list all the food items with category grains?");
  data.filter((item) => item.category === "Grain" && console.log(item));
};

const AllDairy = (data) => {
  // Q] list all the food items with category dairy?
  console.log("Q] list all the food items with category dairy?");
  data.filter((item) => item.category === "Dairy" && console.log(item));
};

const CalorieAbove100 = (data) => {
  // Q] list all the food items with calorie above 100?
  console.log("Q] list all the food items with calorie above 100?");
  data.filter((item) => item.calorie > 100 && console.log(item));
};

const CalorieBelow100 = (data) => {
  // Q] list all the food items with calorie below 100?
  console.log("Q] list all the food items with calorie below 100?");
  data.filter((item) => item.calorie < 100 && console.log(item));
};

const ProteinHL = (data) => {
  // Q] list all the food items with highest protien content to lowest?
  const temp = data;
  console.log(
    "Q] list all the food items with highest protien content to lowest?"
  );
  temp.sort((a, b) => b.protiens - a.protiens);
  console.log(temp);
};

const CabLH = (data) => {
  // Q] list all the food items with lowest cab content to highest?
  const temp = data;
  console.log("Q] list all the food items with lowest cab content to highest?");
  temp.sort((a, b) => a.cab - b.cab);
  console.log(temp);
};

const data = require("./data.json");

ListAllItems(data);
AllVegetabled(data);
AllFruits(data);
AllProtients(data);
AllNuts(data);
AllGrains(data);
AllDairy(data);
CalorieAbove100(data);
CalorieBelow100(data);
ProteinHL(data);
CabLH(data);
