import React from "react";
import { useState } from "react";

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");

  const handleInput = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <input
          className="input"
          type="text"
          value={title}
          onChange={handleInput}
        />
        <button className="button">Create Book!</button>
      </form>
    </div>
  );
};

export default BookCreate;
