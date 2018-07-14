import uuidv4 from "uuid/v4";

const books = [
  { isbn: '9780142424179', title: 'The Fault in Our Stars', author: 'John Green', genre: 'Young adult fiction', price: 15.05, uuid: uuidv4() },
  { isbn: '9780062387240', title: 'Divergent', author: 'Veronica Roth', genre: 'Dystopian Literature', price: 15.05, uuid: uuidv4() },
  { isbn: '9780545663267', title: 'Mockingjay', author: 'Suzanne Collins', genre: 'Dystopian Literature', price: 12.48, uuid: uuidv4() },
  { isbn: '9780307588371', title: 'Gone Girl', author: 'Gillian Flynn', genre: 'Mystery', price: 18.37, uuid: uuidv4() },
  { isbn: '9780553418026', title: 'The Martian', author: 'Andy Weir', genre: 'Science Fiction', price: 14.83, uuid: uuidv4() }
];

export default books;