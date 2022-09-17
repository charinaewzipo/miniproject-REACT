import './FormValidate.css'
import {useState} from "react"
const FormComponent = ()=>{
  const [username,setUserName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confPassword,setConfPassword] = useState('')

  const [errorUsername,setErrorUserName]=useState('ต้องมากกว่า8ตัวอักษร')
  const [errorEmail,setErrorEmail]=useState('อีเมล์ไม่ถูกต้อง')
  const [errorPassword,setErrorPassword]=useState('ต้องมากกว่า8ตัวอักษร')
  const [errorConfPassword,setErrorConfPassword]=useState('รหัสผ่านไม่ตรงกัน')

  const [colorUsername,setColorUsername]=useState('')
  const [colorEmail,setColorEmail]=useState('')
  const validateForm =(e)=>{
    e.preventDefault();
    if(username.length>8){
      setErrorUserName('')
      setColorUsername('green')
    }else{
      setErrorUserName('ต้องมากกว่า8ตัวอักษร')
      setColorUsername('red')
    }
    if(validateEmail(email)){
      setErrorEmail('')
      setColorEmail('green')
    }else{
      setErrorEmail('อีเมล์ไม่ถูกต้อง')
      setColorEmail('red')
    }
    
  }
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  return (
    <div className ="container">
      <form className="form" onSubmit={validateForm}>
      <h2>แบบฟอร์มลงทะเบียน</h2>
        <div className="form-control">
          <label>ชื่อผู้ใช้</label>
          <input type="text" value = {username} onChange={(e)=>setUserName(e.target.value)} style={{borderColor:colorUsername}}></input>
          <small  style={{color:colorUsername}}>{errorUsername}</small>
        </div>
        <div className="form-control">
          <label>อีเมล์</label>
          <input type="text" value = {email} onChange={(e)=>setEmail(e.target.value)} style={{borderColor:colorEmail}}></input>
          <small style={{color:colorEmail}}>{errorEmail}</small>
        </div>
        <div className="form-control">
          <label>รหัสผ่าน</label>
          <input type="password" value = {password} onChange={(e)=>setPassword(e.target.value)}></input>
          <small>{errorPassword}</small>
        </div>
        <div className="form-control">
          <label>ยืนยันรหัสผ่าน</label>
          <input type="password" value={confPassword} onChange={(e)=>setConfPassword(e.target.value)}></input>
          <small>{errorConfPassword}</small>
        </div>
        <button type="submit">ลงทะเบียน</button>
      </form>
    </div>
  )
}
export default FormComponent