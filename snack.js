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

// SNACK 5
function isPalindrome(str) {
  const reverseStr = str.split("").reverse().join("");

  if (str === reverseStr) {
    return true;
  } else {
    return false;
  }
}

function createSlug3(title) {
  if (!title || title === "") {
    throw new Error("Titolo vuoto!");
  }

  return true;
}

function findPostById(posts, id) {
  return posts.find((p) => p.id === Number(id));
}

// --- BONUS
function addPost(posts, post) {
  return posts.push(post);
}

function removePost(posts, id) {
  const postFiltrato = posts.filter((p) => p.id !== id);
  return postFiltrato.length;
}

module.exports = {
  getInitials,
  createSlug,
  average,
  createSlug2,
  isPalindrome,
  createSlug3,
  findPostById,
  addPost,
  removePost,
};
