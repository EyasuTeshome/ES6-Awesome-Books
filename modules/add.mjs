import { getBooks } from './save.mjs';

const addToList = (book) => {
  const list = document.querySelector('.list-container');
  const newBook = document.createElement('div');

  newBook.innerHTML = `
      <p>"${book.title}" by ${book.author}</p>
      <button type="submit" class="delete">Remove</button>
    `;
  list.appendChild(newBook);
};

const showBooks = () => {
  const books = getBooks();
  books.forEach((book) => addToList(book));
};

export { addToList, showBooks };