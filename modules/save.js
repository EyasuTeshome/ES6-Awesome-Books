const getBooks = () => {
  let books;
  if (localStorage.getItem('books') === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem('books'));
  }
  return books;
};

const addBook = (book) => {
  const books = getBooks();
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
};

export { getBooks, addBook };