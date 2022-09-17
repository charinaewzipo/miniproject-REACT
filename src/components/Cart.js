import { MyCartContext } from "../management/context"
import CartItem from "./CartItem"

const Cart = ()=>{
  const {cart,total}=MyCartContext()
  if(cart.length === 0){
      return (
      <div className="cart">
        <h1>ไม่มีสินค้าในตะกร้า</h1>
      </div>
      )
  }else{
    return (
      <div className="cart">
        <div className="title">สินค้าในตะกร้า</div>
        {cart.map((data,index)=>{
          return <CartItem key={data.id} {...data}/>
        })}
       
        <div className="footer">ยอดรวม {total} บาท</div>
      </div>
    )
  }
}
export default Cart