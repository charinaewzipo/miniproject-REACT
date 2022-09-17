//สร้าง context api -> ให้ข้อมูลแก่component
import {createContext,useContext,useReducer,useEffect} from 'react'
import CartData from '../data/CartData'
import reducer from './reducer'

const initState={
  cart:CartData,
  total:0,
  amount:0
}

const CartContext = createContext()

export const MyCartContext =()=>{
  return useContext(CartContext)
}

const CartProvider =({children})=>{
  const [state,dispath]= useReducer(reducer,initState)
  
  useEffect(()=>{
    dispath({type:"CALCULATE_TOTAL"})
  },[state.cart])


  const removeItem=(id)=>{
    console.log("รหัสที่ต้องการลบ",id)
    dispath({type:"REMOVE_ITEM",payload:id})
  }

  const toggleQuantity=(id,type)=>{
    dispath({type:"TOGGLE_QUANTITY",payload:{id,type}})
  }
  return (
    <CartContext.Provider value={{...state,removeItem,toggleQuantity}}>
      {children}
    </CartContext.Provider>
  )
}
export {CartContext,CartProvider}
