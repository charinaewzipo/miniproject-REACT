const Dropdown = ({changeFoodData}) =>{

  return (
   <nav>
     <h2>dropdown</h2>
     <select className="menu" onChange={changeFoodData}>
      <option value="เมนูทั้งหมด">เมนูทั้งหมด</option>
      <option value="ผัด-ทอด">ผัด-ทอด</option>
      <option value="แกง-ต้มยำ">แกง-ต้มยำ</option>
      <option value="เครื่องดื่ม">เครื่องดื่ม</option>
     </select>
   </nav>
  )
}
export default Dropdown