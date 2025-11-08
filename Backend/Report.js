

// Mock DB data for illustration
const readings = [
  { value: 140, category: "Abnormal", food: "White Rice", activity: "None", date: "2025-03-02" },
  { value: 115, category: "Borderline", food: "Pasta", activity: "Walking", date: "2025-03-03" },
  { value: 175, category: "Abnormal", food: "White Rice", activity: "Stress", date: "2025-03-04" },
  { value: 95, category: "Normal", food: "Salad", activity: "Yoga", date: "2025-03-05" },
];

// Helper: calculate average
function getAverage(values) {
  return values.reduce((a, b) => a + b, 0) / values.length;
}

// Generate report
function generateReport(patientId, month, year, readings) {
  //Filter readings by month/year
  const periodReadings = readings.filter(r => new Date(r.date).getMonth() + 1 === month);

  // Compute averages and trend
  const avg = getAverage(periodReadings.map(r => r.value));
  const abnormalCount = periodReadings.filter(r => r.category === "Abnormal").length;
  const abnormalRate = ((abnormalCount / periodReadings.length) * 100).toFixed(1);

  //Identify triggers
  const foodMap = {};
  const activityMap = {};

  for (const r of periodReadings) {
    if (r.category === "Abnormal") {
      foodMap[r.food] = (foodMap[r.food] || 0) + 1;
      activityMap[r.activity] = (activityMap[r.activity] || 0) + 1;
    }
  }

  const topFoods = Object.entries(foodMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([food, count]) => ({ food, count }));

  const topActivities = Object.entries(activityMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([activity, count]) => ({ activity, count }));

  //Determine general trend (mock compare)
  const previousAvg = 130; // example
  let trend = "Stable";
  if (avg < previousAvg - 5) trend = "Improving";
  else if (avg > previousAvg + 5) trend = "Declining";

  //Return summary
  return {
    patientId,
    period: `${month}/${year}`,
    average: avg.toFixed(1),
    abnormalRate: `${abnormalRate}%`,
    trend,
    topFoods,
    topActivities,
  };
}

// Example usage:
const report = generateReport(101, 3, 2025, readings);
console.log(report);
