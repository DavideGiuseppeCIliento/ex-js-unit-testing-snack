const { getInitials, createSlug, average, createSlug2 } = require("./snack");

// --- 1. Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione getInitials restituisce le iniziali di un nome completo."

test(`La funzione getInitials restituisce le iniziali di un nome completo`, () => {
  expect(getInitials("Davide Ciliento")).toBe("DC");
});

// --- 2. Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug restituisce una stringa in lowercase."

test(`La funzione createSlug restituisce una stringa in lowercase`, () => {
  expect(createSlug("Boolean")).toBe("boolean");
});

// --- 3. Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione average calcola la media aritmetica di un array di numeri."
numbers = [1, 2, 3, 4, 5];

test(`La funzione average calcola la media aritmetica di un array di numeri.`, () => {
  expect(average(numbers)).toBe(3);
});

//  --- 4. Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug sostituisce gli spazi con -."

test(`La funzione createSlug2 sostituisce gli spazi con -.`, () => {
  expect(createSlug2("ciao mio amico")).toBe("ciao-mio-amico");
});
