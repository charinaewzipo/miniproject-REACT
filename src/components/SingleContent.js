import { useState } from "react"
import { AiFillApple,AiOutlineMinus } from "react-icons/ai";
const SingleContent = ({title,description})=>{
  const [showContent,setShowContent]=useState(false)
  return (
    <div className="content">
      <h4>{title}</h4>
      <button className="btn" onClick={()=>setShowContent(!showContent)}>
        {showContent ? <AiOutlineMinus/>:<AiFillApple/>}
      </button>
      {showContent ? <p>{description}</p>:false}
      
    </div>
  )
}
export default SingleContent