import { Link } from "react-router-dom";
import amazonlogo from "./images/amazonlogo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "./StateProvider";
export default function Header() {
  const [{basket}]=useStateValue()
  return (
    <nav className="header">
      <Link to="/">
        <img
          src={`https://i.pinimg.com/originals/cb/66/8c/cb668cd9b0bf1220046193aa966a19cc.jpg`}
          className="amazon--logo"
        />
      </Link>
      <div className="header__Search">
        <input type="text" />
        <SearchIcon className="header__SearchIcon" />
      </div>

      <Link className="header__link" to="/login">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Shiva</span>
          <span className="header__optionLineTwo"> Sign In</span>
        </div>
      </Link>
      <Link className="header__link" to="/">
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo"> &Orders</span>
        </div>
      </Link>
      <Link className="header__link" to="/">
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </Link>
      <Link className="header__link" to='/checkout'>
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header_basketCount">{basket.length}</span>
        </div>
      </Link>
    </nav>
  );
}
