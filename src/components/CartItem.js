import plus from "../image/plus.svg";
import minus from "../image/minus.svg";
import delete_icn from "../image/delete-icn.svg";
import { MyCartContext } from "../management/context";
const CartItem = ({ id, name, image_url, price, quantity }) => {
  const { removeItem, toggleQuantity } = MyCartContext();
  return (
    <div className="cart-item">
      <div className="product_image">
        <img src={image_url} alt="" />
      </div>
      <div className="description">
        <span>{name}</span>
        <span>ราคา {price}</span>
      </div>
      <div className="quantity">
        <button
          className="plus"
          onClick={() => toggleQuantity(id, "increment")}
        >
          <img src={plus} alt="" />
        </button>
        <input type="text" value={quantity} disabled />
        <button className="minus" onClick={() => toggleQuantity(id)}>
          {" "}
          <img src={minus} alt="" />{" "}
        </button>
      </div>
      <div className="total-price">{quantity * price}</div>
      <div className="remove" onClick={() => removeItem(id)}>
        <img src={delete_icn} alt="" />
      </div>
    </div>
  );
};
export default CartItem;
