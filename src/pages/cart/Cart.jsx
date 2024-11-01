import { useContext } from "react";
import "./Cart.css";
import CartItem from "./Cartitem";
import OrderSummary from "./OrderSummary";
import CartContext from "../../context/cartContext";

const Cart = () => {

    const {cartItems, addToCart, removeFromCart} = useContext(CartContext);

    const totalPrice = cartItems.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed();
    return ( 
    <div className="cart">
        <div className="cart-title">Your Shoupping Cart</div>
        <div className="cart-wrapper">
            <div className="cart-items">
                {cartItems.map(item =>
                    <CartItem
                        key={item.id}
                        removeFromCart={removeFromCart}
                        addToCart={addToCart}
                        item={item}
                        />
                )}
            </div>
            <OrderSummary totalPrice={totalPrice}/>
        </div>
    </div> );
}

export default Cart;