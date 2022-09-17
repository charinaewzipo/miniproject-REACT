import './App.css';
import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import List from './components/List';
import Alert from './components/Alert';
function App() {
  const [name,setName]=useState('')
  const [list,setList]=useState([])
  const [alert,setAlert]=useState({show:false,msg:'',type:''})
  const [checkEditItem,setCheckEditItem]=useState(false)
  const [editId,setEditId]=useState(null)
  
  const submitData=(e)=>{
  e.preventDefault()
  if(!name){
    //แสดง Alert
    setAlert({show:true,msg:'ป้อนข้อมูล',type:'error'})
  }else if(checkEditItem && name){
    //อัพเดทข้อมูล
    const result = list.map((data)=>{
      if(data.id === editId){
        return {...data,title:name}
      }
      return data
    })
    setList(result)
    setName('')
    setCheckEditItem(false)
    setEditId(null)
    setAlert({show:true,msg:'แก้ไขข้อมูลเรียบร้อย',type:'success'})
  }else{
    const newItem = {
      id:uuidv4(),
      title:name
    }
    setList([...list,newItem])
    setName('')
    setAlert({show:true,msg:'บันทึกช้อมูลเรียบร้อย',type:'success'})
    
  }
}

const removeData=(id)=>{
  const result = list.filter((data)=>data.id !== id)
  setList(result)
  setAlert({show:true,msg:'ลบข้อมูลเรียบร้อย',type:'error'})
}

const editData=(id)=>{
  setCheckEditItem(true)
  setEditId(id)
  const search = list.find((data)=>data.id === id)
  setName(search.title)
  
}
  return (
    <section className="container">
       <h1>TodoList</h1>
      {alert.show === true && <Alert {...alert} setAlert={setAlert} list={list}/>}

      <form className="form-group" onSubmit={submitData}>
        <div className="form-control">
          <input type="text" className="text-input" 
          onChange={(e)=>setName(e.target.value)}
          value={name}
          />
          <button type="submit" className="submit-btn">
            {checkEditItem ? "แก้ไขข้แมูล" : "เพิ่มข้อมูล"}
          </button>
        </div>
      </form>
      <section className='list-container'>
        {list.map((data,index)=>{
          return <List key={index} {...data} removeData={removeData} editData={editData}/>
        })}
      </section>
    </section>
  );
}

export default App;
