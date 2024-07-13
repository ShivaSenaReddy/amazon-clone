import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
export default function CheckoutProduct(props) {
  const [{ basket }, dispatch] = useStateValue();
  function removeItem() {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: props.id });
  }
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__img" src={props.img} />
      <div className="checkoutProduct__info">
        <p>{props.title}</p>
        <p>{`Rs ${props.price}`}</p>
        <p>{new Array(props.rating).fill("⭐")}</p>
        <button
          onClick={() => {
            removeItem();
          }}
        >
          Remove from Basket
        </button>
      </div>
    </div>
  );
}
