const Book = (props) => {
  const { img, title, author } = props.book;
  // const getSingleBook = () => {
  //   props.getBook(id);
  // };
  const number = props.number;
  return (
    <section className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>

      <h4>{author}</h4>
      <span className="number">{number + 1}</span>
    </section>
  );
};

export default Book;
