import React from 'react';
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Rating from '../components/ui/Rating';
import Price from '../components/ui/Price';
import { useParams } from 'react-router-dom';
import Book from '../components/ui/Book';

const BookInfo = ({ books, addToCart }) => {
    const { id } = useParams();
    const book = books.find(book => +book.id === +id);
    console.log(id)
    return (
        <div id="books__body">
            <main id="books__main">
                    <div className="books__container">
                        <div className="row">
                            <div className="book__selected--top">
                                <Link to="/books" className="books__link">
                                    <FontAwesomeIcon icon="arrow-left" />
                                </Link>
                                <Link to="/books" className="book__link">
                                    <h2 className="book__selected--title--top">Books</h2>
                                </Link>
                            </div>
                            <div className="book__selected">
                                <figure className="book__selected--figure">
                                    <img src={book.url} className="book__selected--img" alt="" />
                                </figure>
                                <div className="book__selected--description">
                                    <h2 className="book__selected--title">{book.title}</h2>
                                    <Rating rating={book.rating}/>
                                <div className="book__selected--price">
                                    <Price originalPrice={book.originalPrice} salePrice= {book.salePrice} />
                                </div>
                                <div className="book__summary">
                                    <h3 className="book__summary--title">
                                        Summary
                                    </h3>
                                    <p className="book__summary--para">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                        Molestiae repellendus error ea at doloremque asperiores. 
                                        Omnis nisi laborum accusantium, ratione at esse ipsum, 
                                        nostrum ea fugiat, ducimus totam cum ab?
                                    </p>
                                    <p className="book__summary--para">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                        Molestiae repellendus error ea at doloremque asperiores. 
                                        Omnis nisi laborum accusantium, ratione at esse ipsum, 
                                        nostrum ea fugiat, ducimus totam cum ab?
                                    </p>
                                </div>
                                <button className="btn" onClick={() => addToCart(book)}>
                                Add to Cart
                                </button>
                                </div>
                            </div>
                        </div>
                        <div className="books__container">
                            <div className="row">
                                <div className="book__selected--top">
                                    <h2 className="book__selected--title--top">
                                        Recommended Books
                                    </h2>
                                </div>
                                <div className="books">
                                    {books
                                        .filter((book) => book.rating === 5 && +book.id !== +id)
                                        .slice(0, 4)
                                        .map((book) => (
                                            <Book book={book} key={book.id} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
            </main>
        </div>
    );
}

export default BookInfo;
