import { useContext } from "react"
import { ThemeContext } from "../App"
import freelance_dark from "../img/freelance-dark.svg"
import freelance_light from "../img/freelance-light.svg"

const Content=()=>{
  const {theme} =useContext(ThemeContext)
  return(
    <main>
      <div className={theme}>
        <h1>Official</h1>
        <p>DarkMode Workshop</p>
        <img src={theme==="dark" ? freelance_dark:freelance_light}></img>
      </div>
    </main>
  )
}
export default Content