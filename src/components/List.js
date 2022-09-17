const List = ({id,title,removeData,editData})=>{
  return (
    <div className="list-item">
      <p className="title">{title}</p>
      <div className="btn-container">
        <button onClick={()=>editData(id)}>แก้ไข</button>
        <button onClick={()=>removeData(id)}>ลบ</button>
      </div>
    </div>
  ) 
}
export default List