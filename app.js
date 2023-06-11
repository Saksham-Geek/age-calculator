// Get the input element for date of birth
let dobInput = document.getElementById("dob");

// Add an event listener to calculate age when the input value changes
dobInput.addEventListener("change", calculateAge);

// Function to calculate age
function calculateAge() {
  // Get the date of birth value from the input element
  let dobValue = dobInput.value;

  // Create a Date object from the input value
  let dobDate = new Date(dobValue);

  // Get the current date
  let currentDate = new Date();

  // Calculate the age difference in milliseconds
  let ageDiff = currentDate - dobDate;

  // Convert the age difference to years, months, and days
  let ageDate = new Date(ageDiff);
  let years = ageDate.getUTCFullYear() - 1970;
  let months = ageDate.getUTCMonth();
  let days = ageDate.getUTCDate() - 1;

  // Update the HTML elements with the calculated age
  document.getElementById("years").textContent = years;
  document.getElementById("months").textContent = months;
  document.getElementById("days").textContent = days;
}
