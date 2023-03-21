import React from "react";
import { useState, useContext } from "react";
import BooksContext from "../context/books";

const BookEdit = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useContext(BooksContext);
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    editBookById(book.id, title);
  };
  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        type="text"
        className="input"
        value={title}
        onChange={handleChange}
      />
      <button className="button is-primary">Save</button>
    </form>
  );
};

export default BookEdit;
