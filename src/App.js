import './App.css';
import Dropdown from './components/Dropdown';
import FoodComponent from './components/FoodComponent';
import {useState} from 'react'
import MenuData from './data/menuData';

function App() {
  const [foods,setFoods]=useState(MenuData)

  const changeFoodData=(e)=>{
    const category = e.target.value;
    if(category === "เมนูทั้งหมด"){
      setFoods(MenuData)
    }else{
      const result = MenuData.filter((element)=>{
        return (element.menu === category)
      })
      setFoods(result)
    }
  }
  return (
    <div className="App">
      <Dropdown changeFoodData={changeFoodData}/>
      <div className='content'>
        {foods.map((item,index)=>{
          return <FoodComponent key={index} {...item}/>
        })}
      </div>
      
    </div>
  );
}

export default App;
