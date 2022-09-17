//กำหนด action ใน App
const reducer = (state, action) => {
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state, //เก็บ total ,amount เก่าไว้
      cart: state.cart.filter((item) => item.id !== action.payload), //คัดเอาidออก
    };
  }
  if (action.type === "TOGGLE_QUANTITY") {
    let newCart = state.cart
      .map((item) => {
        if (item.id === action.payload.id) {
          if (action.payload.type === "increment") {
            return {
              ...item,
              quantity: item.quantity < 5 ? item.quantity + 1 : item.quantity,
            };
            // console.log("เพิ่มปริมาณสินค้า",action.payload.id)
          } else {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
            // console.log("ลดปริมาณสินค้า",action.payload.id)
          }
        }
        return item;
      })
      .filter((item) => item.quantity !== 0);
    return {
      ...state,
      cart: newCart,
    };
  }

  if (action.type === "CALCULATE_TOTAL") {
    const { total, amount } = state.cart.reduce(
      (sum, item) => {
        const { price, quantity } = item;
        const itemTotal = price * quantity;

        sum.total += itemTotal;
        sum.amount += quantity;
        return sum;
      },
      {
        total: 0,
        amount: 0,
      }
    );

    return {
      ...state,
      total,
      amount,
    };
  }
};
export default reducer;
