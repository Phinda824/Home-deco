import React from "react";
import "../styles/cart.css";
import CommonSection from "../conponents/UI/CommonSection";

import { cartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="cart_container">
      <CommonSection title="Shopping" />

      <div className="table_container">
        {cartItems.length == 0 ? (
          <h2 className="report">No item added to the cart</h2>
        ) : (
          <div className="table">
            <ul className="table_header">
              <li className="img_sect">
                <h1>Image</h1>
              </li>
              <li className="t_name">
                <h1>Title</h1>
              </li>
              <li className="t_price">
                <h1>Price</h1>
              </li>
              <li className="t_qty">
                <h1>Qty</h1>
              </li>
              <li className="t_delete">
                <h1>Delete</h1>
              </li>
            </ul>

            {cartItems.map((item, index) => (
              <Tr item={item} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };

  return (
    <div className="table_b">
      <li className="b_img">
        <img src={item.imgUrl} alt="" />
      </li>
      <li className="b_name">{item.productName}</li>
      <li className="b_price">{item.price}</li>
      <li className="b_qty">{item.quantity}px</li>
      <li className="b_delete">
        <i onClick={deleteProduct} class="fa-solid fa-trash"></i>
      </li>
    </div>
  );
};

export default Cart;
