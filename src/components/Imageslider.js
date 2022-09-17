import ImageData from "./ImageData"
import { AiOutlineArrowRight,AiOutlineArrowLeft } from "react-icons/ai";
import { useState } from "react";
const ImageSlider = ()=>{
  const [current,setCurrent]=useState(0)
  const length = ImageData.length

  const prevSlide =()=>{
    (current === 0 ? setCurrent(length-1) :setCurrent(current-1))
    // if(current === 0)
    // setCurrent(length-1)
    // else
    // setCurrent(current-1)
  }
  
  const nextSlide =()=>{

    (current === length-1 ? setCurrent(0) : setCurrent(current+1))
    // if(current === length-1)
    //   setCurrent(0)
    // else
    //   setCurrent(current+1)
  }
  return (
    <section className="slider">
      <AiOutlineArrowLeft className="leftarrow" onClick={prevSlide}/>
      <AiOutlineArrowRight className="rightarrow" onClick={nextSlide}/>
      {ImageData.map((image,index)=>{
        return (
          <div className={index == current ? "slide active" : "slide"} key={index}>
            {index === current && 
            (
              <div>
                <p>{image.title}</p>
                <img src={image.image} className="image"></img>
              </div>
            )}
          </div>
        )
      })}
      
    </section>
  )
}
export default ImageSlider