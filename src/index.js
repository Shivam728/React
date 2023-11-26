import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { books } from "./books";
import Book from "./Book";
// const Book = () => {
//   const title = "Fourth Wing (The Empyrean, 1)";
//   return (
//     <section className="book">
//       <img
//         src="https://images-na.ssl-images-amazon.com/images/I/91n7p-j5aqL._AC_UL900_SR900,600_.jpg"
//         alt="Fourth Wing (The Empyrean, 1)"
//       />
//       <h2>{title}</h2>
//       <h4>Rebecca Yarros</h4>
//     </section>
//   );
// };
// const firstBook = {
//   img: "https://images-na.ssl-images-amazon.com/images/I/91n7p-j5aqL._AC_UL900_SR900,600_.jpg",
//   title: "Fourth Wing (The Empyrean, 1)",
//   author: "Rebecca Yarros",
// };

// const secondBook = {
//   img: "https://images-na.ssl-images-amazon.com/images/I/71RxwXoyOFL._AC_UL900_SR900,600_.jpg",
//   title: "The Great Disappearance",
//   author: "Dr. David Jeremiah ",
// };

// const thirdBook = {
//   img: "https://images-na.ssl-images-amazon.com/images/I/81RBTG28sCL._AC_UL900_SR900,600_.jpg",
//   title: "All the Light We Cannot See",
//   author: "Anthony Doerr",
// };

// function BookList() {
//   return (
//     <section className="booklist">
//       <Book
//         author={firstBook.author}
//         title={firstBook.title}
//         img={firstBook.img}
//       />
//       <Book
//         author={secondBook.author}
//         title={secondBook.title}
//         img={secondBook.img}
//       />
//       <Book
//         author={thirdBook.author}
//         title={thirdBook.title}
//         img={thirdBook.img}
//       />
//     </section>
//   );
// }

function BookList() {
  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <section className="booklist">
        {books.map((book, number) => {
          // const { img, title, author, id } = book;
          return <Book book={book} key={book.id} number={number} />;
        })}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
