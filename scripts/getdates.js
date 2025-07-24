//  select the DOM elements for output
const full = document.querySelector("#current_year");

//  To create a date object
const today = new Date();

//  To get the current year
//current_year.innerHTML = `getFullYear(): ${today.getFullYear()}`;  // the ` ` is the space for text. getFullYear(): could be any text, and ${today.getFullYear()} is th code to show the current year.
current_year.innerHTML = `${today.getFullYear()}`;  // Just show 2025