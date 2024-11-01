import { useParams } from "react-router-dom";
import { books } from "../../data/books";
import Rating from "../../component/book-slider/Raiting";
import "./book.css";
import { useContext, useState } from "react";
import CartContext from "../../context/cartContext";

const Book = () => {
    

    const {addToCart} = useContext(CartContext);

    const {id} = useParams();
    const book = books.find(b => b.id === +id);


    const [qty, setQty] = useState(1);

    console.log(book);
    return ( <div className="book">
        <div className="book-content">
            <img src={`/books/${book.image}`} alt={book.title} className="book-content-img"/>
            <div className="book-content-info">
                <h1 className="book-title">{book.title}</h1>
                <div className="book-author">
                    by <span>{book.author}</span> (Author)
                </div>
                <Rating rating={book.rating} reviews={book.reviews}/>
                <div className="book-add-to-cart">
                    <input
                        min="1"
                        max="100"
                        type="number"
                        className="book-add-to-cart-input"
                        value={qty}
                        onChange={e => setQty(e.target.value)}
                    />
                    <button onClick={() => addToCart({...book, quantity: qty})} className="book-add-to-cart-btn">
                        <i className="bi bi-cart-plus"></i>
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
        <p className="book-description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <div className="book-icons">
            <div className="book-icon">
                <small>Print Length</small>
                <i className="bi bi-file-earmark-break"></i>
                <b>{book.printLength} Pages</b>
            </div>

            <div className="book-icon">
                <small>Language</small>
                <i className="bi bi-globe"></i>
                <b>{book.language}</b>
            </div>

            <div className="book-icon">
                <small>Publication date</small>
                <i className="bi bi-calendar3"></i>
                <b>{book.PublicationDate}</b>
            </div>
        </div>
    </div> );
}

export default Book;
