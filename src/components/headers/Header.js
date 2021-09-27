import React, { useContext, useState } from "react";
import { GlobalState } from "../../GlobalState";
import Menu from "./icon/menu.svg";
import Close from "./icon/close.svg";
import Cart from "./icon/cart.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { BsPerson } from "react-icons/bs";
import { FiHeart, FiShoppingBag } from "react-icons/fi";
function Header() {
  const state = useContext(GlobalState);
  const [isLogged] = state.userAPI.isLogged;
  const [isAdmin] = state.userAPI.isAdmin;
  const [cart] = state.userAPI.cart;
  const [menu, setMenu] = useState(false);

  const logoutUser = async () => {
    await axios.get("/user/logout");

    localStorage.removeItem("firstLogin");

    window.location.href = "/";
  };

  const adminRouter = () => {
    return (
      <>
        <li>
          <Link to="/create_product">Create Product</Link>
        </li>
        <li>
          <Link to="/category">Categories</Link>
        </li>
      </>
    );
  };

  const loggedRouter = () => {
    return (
      <>
        <li>
          <Link to="/history">History</Link>
        </li>
        <li>
          <Link to="/" onClick={logoutUser}>
            Logout
          </Link>
        </li>
      </>
    );
  };

  const styleMenu = {
    left: menu ? 0 : "-100%",
  };

  return (
    <header>
      <div className="menu" onClick={() => setMenu(!menu)}>
        <img src={Menu} alt="" width="30" />
      </div>

      <div className="logo">
        <h1>
          <Link to="/">{isAdmin ? "Admin" : "BOOKSELL"}</Link>
        </h1>
        <div className="dot"></div>
      </div>

      <ul style={styleMenu}>
        {isLogged ? (
          loggedRouter()
        ) : (
          <li>
            <span>
              <BsPerson />
              <b>0</b>
            </span>
            <Link to="/login">my account</Link>
          </li>
        )}
        <li>
          <span>
            <FiHeart />
            <b>0</b>
          </span>
          <Link to="/">Wishlist</Link>
          <span>$0</span>
        </li>
        <li>
          <span>
            <FiShoppingBag />
            <b>0</b>
          </span>
          <Link to="/">Your cart</Link>
          <span>$0</span>
        </li>
        <li>
          <Link to="/"></Link>
        </li>

        {isAdmin && adminRouter()}

        <li onClick={() => setMenu(!menu)}>
          <img src={Close} alt="" width="30" className="menu" />
        </li>
      </ul>

      {isAdmin ? (
        ""
      ) : (
        <div className="cart-icon">
          <span>{cart.length}</span>
          <Link to="/cart">
            <img src={Cart} alt="" width="30" />
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
