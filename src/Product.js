import "./Product.css";
import { useStateValue } from "./StateProvider";

export default function Product(props) {
  const [{ basket }, dispatch] = useStateValue();
  function addItem() {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: {
        title: props.title,
        img: props.img,
        rating: props.rating,
        id: props.id,
        price: props.price,
      },
    });
  }
  return (
    <div className="product">
      <div className="product__info">
        <p>{props.title}</p>
        <p>{`Rs ${props.price}`}</p>
        <p>{new Array(props.rating).fill("⭐")}</p>
      </div>
      <img src={props.img} />
      <button onClick={() => addItem()}>Add to Basket</button>
    </div>
  );
}
