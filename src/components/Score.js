import { useContext } from "react"
import { DataContext } from "../App"
import QuestionsData from "./QuestionData"
const Score = ()=>{
  const {score,setAppState,setScore}=useContext(DataContext)

  const restartApp=()=>{
    setAppState('menu')
    setScore(0)
  }
  return(
    <div className="score">
      <h1>Score component</h1>
      <h2>คุณตอบถูก: {score} / {QuestionsData.length} </h2>
      <button onClick={restartApp}>ทำแบบทดสอบอีกครั้ง</button>
    </div>
  )
}
export default Score