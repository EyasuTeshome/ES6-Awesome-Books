import { getBooks } from './save.js';

const addToList = (book) => {
  const list = document.querySelector('.list-container');
  const newBook = document.createElement('tr');
  newBook.innerHTML = `
  <td>${book.title} by </td>
  <td class="author">${book.author}</td>
  <td class="d-btn"><a href="#" class="delete">Remove</a></td>
    `;
  list.appendChild(newBook);
};

const showBooks = () => {
  const books = getBooks();
  books.forEach((book) => addToList(book));
};

export { addToList, showBooks };