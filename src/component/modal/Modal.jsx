import "./modal.css";
import Rating from "../book-slider/Raiting";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import CartContext from "../../context/cartContext";

const Modal = ({bookData, setOpenModal}) => {

    const [qty, setQty] = useState(1);


    const {addToCart} = useContext(CartContext);
    const {image, title, inStock, rating, reviews, author, price, id} = bookData;
    return ( 


    <div onClick={() => setOpenModal(false)} className="modal-container">
        <div onClick={(event) => event.stopPropagation()} className="modal-content">
            <i onClick={() => setOpenModal(false)} className="bi bi-x-circle-fill modal-icon"></i>
            <div className="modal-content-img">
                <img src={`/books/${image}`} alt={title}/>
            </div>
            <div className="modal-content-info">
                <h5 className="modal-content-info-title">{title}</h5>
                <div className="modal-content-info-stock">
                    <b>Status: </b>{inStock ? "In Stock" : "Not In Stock"}
            </div>
                <Rating rating={rating} reviews={reviews}/>
                <div className="modal-content-info-author">
                    <b>Author: </b> {author}
                </div>
                <div className="modal-content-info-price">
                    <b>Price: </b>${price}
                </div>
                <div className="modal-add-to-cart">
                    <input
                        type="number"
                        min="1"
                        max="100"
                        className="modal-add-to-cart-input"
                        value={qty}
                        onChange={e => setQty(e.target.value)}
                        />
                    <button onClick={() => addToCart({...bookData, quantity: qty})} className="modal-add-to-cart-btn">
                        <i className="bi bi-cart-plus"></i>
                        Add To Cart
                    </button>
                </div>
                <Link to={`/book/${id}`} className="modal-content-info-link">
                    See More Details.
                </Link>
            </div>
        </div>
    </div> 
    );
}

export default Modal;