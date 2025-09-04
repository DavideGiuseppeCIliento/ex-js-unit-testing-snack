const {
  getInitials,
  createSlug,
  average,
  createSlug2,
  isPalindrome,
  createSlug3,
  findPostById,
  addPost,
  removePost,
} = require("./snack");

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

//  --- 5. Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione isPalindrome verifica se una stringa è un palindromo."
// 📌 Nota: una stringa palindroma è una sequenza di caratteri che si legge uguale sia da sinistra a destra che da destra a sinistra.

test(`La funzione isPalindrome verifica se una stringa è un palindromo.`, () => {
  expect(isPalindrome("anna")).toBe(true);
  expect(isPalindrome("giovanni")).toBe(false);
});

// --- 6. Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug lancia un errore se il titolo è vuoto o non valido."

test(`La funzione createSlug3 lancia un errore se il titolo è vuoto o non valido`, () => {
  expect(() => createSlug3("")).toThrow();
  expect(createSlug3("Titolo")).toBe(true);
});

// --- 7. Crea un array di oggetti posts, in cui ogni oggetto ha le proprietà id, title e slug.
// Creare un test che verifichi le seguenti descrizioni:
// 👉 "La funzione findPostById restituisce il post corretto dato l’array di post e l’id"

beforeEach(() => {
  posts = [
    { id: 1, title: "Morituri te salutan", slug: "morituri-te-salutan" },
    { id: 2, title: "Vivere bene", slug: "vivere-bene" },
    { id: 3, title: "Giorni belli si si", slug: "giorni-belli-si-si" },
  ];
});

test(`La funzione findPostById restituisce il post corretto dato l’array di post e l’id`, () => {
  expect(findPostById(posts, "3")).toEqual({
    id: 3,
    title: "Giorni belli si si",
    slug: "giorni-belli-si-si",
  });
});

// --- BONUS
// ## 1
// 👉 "Dopo aver aggiunto un post con la funzione addPost, l'array posts deve contenere un elemento in più."
// 👉 "Dopo aver rimosso un post con la funzione removePost, l'array posts deve contenere un elemento in meno."
// Si consiglia di resettare l'array di post dopo ogni test. Ti ricordi come si fa?
describe("Gestione Post", () => {
  let posts2;
  beforeEach(() => {
    posts2 = [
      { id: 1, title: "Morituri te salutan", slug: "morituri-te-salutan" },
      { id: 2, title: "Vivere bene", slug: "vivere-bene" },
      { id: 3, title: "Giorni belli si si", slug: "giorni-belli-si-si" },
    ];
  });

  test("Post +1", () => {
    expect(
      addPost(posts2, {
        id: 1,
        title: "Ciao Amico Mio",
        slug: "ciao-amico-mio",
      })
    ).toBe(4);
  });

  test("Post-1", () => {
    expect(removePost(posts2, 3)).toBe(2);
  });
});

// ## 2
// 👉 "Se si tenta di aggiungere un post con un id o uno slug già esistente, la funzione addPost deve lanciare un errore."
// Gli errori devono essere chiari e distinti, es. "Slug già esistente" e “Id già esistente”.

// ## 3
// Creare un test che verifichi la seguente descrizione:
// 👉 "Se viene passato un array di post come secondo argomento, la funzione createSlug incrementa di 1 se lo slug esiste già."
