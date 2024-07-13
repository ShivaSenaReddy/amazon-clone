export const initialState = {
  basket: [],
  jssr: [],
};

export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      console.log({ ...state, basket: [...state.basket, action.payload] });
      return { ...state, basket: [...state.basket, action.payload] };
      break;
    case "REMOVE_FROM_BASKET":
      console.log(action.payload);
      console.log({
        ...state,
        basket: state.basket.filter((item) => item.id !== action.payload),
      });

      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.payload),
      };
      break;
    default:
      return state;
  }
}

export function getBasketTotal(basket) {
  return basket.reduce((amount, item) => {
    return amount + item.price;
  }, 0);
}

function myreduceFn(item, num) {
  return item.price + num;
}
