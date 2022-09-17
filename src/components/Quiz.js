import { useContext, useEffect, useState } from "react"
import { DataContext } from "../App"
import QuestionsData from "./QuestionData"
const Quiz = ()=>{
  const [current,setCurrent]=useState(0)
  const [selectchoice,setSelectChoice]=useState('')
  const {score,setScore,setAppState}=useContext(DataContext)
  
  useEffect(()=>{
    checkAnswer()
  },[selectchoice])

  const checkAnswer =()=>{
    if(selectchoice !== ""){
      if(selectchoice === QuestionsData[current].answer){
        console.log("ตอบถูก")
        setScore(score+1)
        nextQuestion()
      }else{
        console.log("ตอบผิด")
        nextQuestion()
    }
   }
  }
  
   const nextQuestion=()=>{
    setSelectChoice('')
    if(current === QuestionsData.length-1){
      setAppState('score')
    }else{
      setCurrent(current+1)
    }
   }
   
  return(
    <div className="quiz">
      <h1>Quiz component</h1>
      <h2>{QuestionsData[current].question}</h2>
      <div className="choices">
        <button onClick={()=>setSelectChoice("A")}>{QuestionsData[current].A}</button>
        <button onClick={()=>setSelectChoice("B")}>{QuestionsData[current].B}</button>
        <button onClick={()=>setSelectChoice("C")}>{QuestionsData[current].C}</button>
        <button onClick={()=>setSelectChoice("D")}>{QuestionsData[current].D}</button>
    
      </div>
      <p>{`${current}/${QuestionsData.length}`}</p>
    </div>
  )
}
export default Quiz