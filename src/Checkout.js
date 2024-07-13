import amazonadd from "./images/amazonadd.jpg";
import homepage from "./images/homepage.jpg";
import leanstartupimg from "./images/leanstartup.jpg";
import shoesimg from "./images/shoes.jpg";
import watchimg from "./images/watch.jpg";
import dumbellimg from "./images/dumbell.webp";
import waterpurifierimg from "./images/waterpurifier.jpg";
import laptopimg from "./images/laptop.jpg";
import { getBasketTotal } from "./reducer";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
export default function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src={amazonadd} className="checkout_add" />
        {basket.length == 0 ? (
          <h1>Your cart is empty</h1>
        ) : (
          <h1>Your Shopping Basket</h1>
        )}
        {basket.length > 0
          ? basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                img={item.img}
              />
            ))
          : ""}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <div className="subtotal">
            <p>
              Subtotal ({basket.length}items) Rs.{getBasketTotal(basket)}
            </p>
            <small>
              <input type="checkbox" />
              This Order contains gift option
            </small>
            <button>Proceed to checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}
