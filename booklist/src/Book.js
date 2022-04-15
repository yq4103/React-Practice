import React from 'react'

const Book = (props) => {

  const { image, title, author } = props.book

  const clickHandler = () => {
    alert('No $$');
  }

  return (
    <article className='book'>
      <img src={image} alt="book cover" />
      <h1>{title}</h1>
      <h4 style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}>{author.toUpperCase()}</h4>
      <button type='button' onClick={clickHandler}>Buy</button>
    </article>
  )
};

export default Book;