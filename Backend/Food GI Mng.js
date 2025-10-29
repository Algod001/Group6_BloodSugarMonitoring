
let foods = []; // mock database table

// Helper: determine GI level
function categorizeGI(giValue) {
  if (giValue < 55) return "Low";
  if (giValue >= 55 && giValue <= 69) return "Medium";
  return "High";
}

// 1️⃣ Add food
function addFood(foodName, category, giValue) {
  const giLevel = categorizeGI(giValue);
  const newFood = {
    food_id: foods.length + 1,
    food_name: foodName,
    category,
    gi_value: giValue,
    gi_level: giLevel,
  };
  foods.push(newFood);
  console.log("Food added:", newFood);
  return newFood;
}

// 2️⃣ Update food
function updateFood(foodId, updatedData) {
  const food = foods.find(f => f.food_id === foodId);
  if (!food) {
    console.log("Food not found!");
    return null;
  }

  Object.assign(food, updatedData);

  if (updatedData.gi_value) {
    food.gi_level = categorizeGI(food.gi_value);
  }

  console.log("Food updated:", food);
  return food;
}

// 3️⃣ Delete food
function deleteFood(foodId) {
  const index = foods.findIndex(f => f.food_id === foodId);
  if (index === -1) {
    console.log("Food not found!");
    return false;
  }
  foods.splice(index, 1);
  console.log(`Food ${foodId} deleted successfully.`);
  return true;
}

// 4️⃣ Search food
function searchFoods({ name, category, minGI, maxGI, level }) {
  return foods.filter(food => {
    return (
      (!name || food.food_name.toLowerCase().includes(name.toLowerCase())) &&
      (!category || food.category === category) &&
      (!minGI || food.gi_value >= minGI) &&
      (!maxGI || food.gi_value <= maxGI) &&
      (!level || food.gi_level === level)
    );
  });
}

// Example usage:
addFood("Apple", "Fruit", 38);
addFood("White Rice", "Grain", 72);
updateFood(2, { gi_value: 68 });
console.log(searchFoods({ category: "Grain" }));
deleteFood(1);
