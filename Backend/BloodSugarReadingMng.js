
function categorizeBloodSugar(value, unit = "mg/dL") {
  // Convert mmol/L to mg/dL if needed
  if (unit === "mmol/L") {
    value = value * 18;
  }

  // Categorize based on fasting/post-meal general standards
  if (value < 100) return "Normal";
  if (value >= 100 && value < 126) return "Borderline";
  return "Abnormal";
}


let readings = []; // Normally this would be a database table

function addReading(patientId, datetime, value, unit, food, activity, symptoms, notes) {
  const category = categorizeBloodSugar(value, unit);

  const newReading = {
    reading_id: readings.length + 1,
    patient_id: patientId,
    datetime,
    value,
    unit,
    category,
    food_intake: food,
    activity,
    symptoms,
    notes,
  };

  readings.push(newReading);
  console.log("Reading added successfully:", newReading);
  return newReading;
}

function updateReading(readingId, updatedData) {
  const reading = readings.find(r => r.reading_id === readingId);
  if (!reading) {
    console.log("Reading not found!");
    return null;
  }

  // Update values dynamically
  Object.assign(reading, updatedData);

  // Recalculate category if value or unit changed
  if (updatedData.value || updatedData.unit) {
    reading.category = categorizeBloodSugar(reading.value, reading.unit);
  }

  console.log("Reading updated:", reading);
  return reading;
}

function deleteReading(readingId) {
  const index = readings.findIndex(r => r.reading_id === readingId);
  if (index === -1) {
    console.log("Reading not found!");
    return false;
  }
  readings.splice(index, 1);
  console.log(`Reading ${readingId} deleted successfully.`);
  return true;
}

// Add new reading
addReading(
  101,
  "2025-10-28 07:45",
  145,
  "mg/dL",
  "Rice, Fish",
  "Jogging",
  "Mild headache",
  "After breakfast"
);

// Modify reading
updateReading(1, { value: 95, notes: "Updated after medication" });

// Delete reading
deleteReading(1);

// Export for integration
module.exports = { addReading, updateReading, deleteReading, categorizeBloodSugar };
