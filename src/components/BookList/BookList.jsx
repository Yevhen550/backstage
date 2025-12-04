import s from "./BookList.module.css";

const BookList = ({ books }) => {
  return (
    <ul>
      {(!books || books.length === 0) && <p>No books available</p>}

      {books.map((book) => (
        <li key={book.id} className={s.container}>
          {book.name}
        </li>
      ))}
    </ul>
  );
};
export default BookList;
