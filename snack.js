// SNACK 1
function getInitials(name) {
  const nameSurname = name.split(" ");
  console.log(nameSurname);
  const initial = `${nameSurname[0][0]}${nameSurname[1][0]}`;
  return initial.toUpperCase();
}

// SNACK 2
function createSlug(str) {
  return str.toLowerCase();
}

// SNACK 3
function average(numbers) {
  return numbers.reduce((acc, num) => acc + num) / numbers.length;
}

// SNACK 4
function createSlug2(str) {
  return str.toLowerCase().replaceAll(" ", "-");
}

module.exports = { getInitials, createSlug, average, createSlug2 };
