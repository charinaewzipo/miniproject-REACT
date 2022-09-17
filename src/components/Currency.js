import "./Currency.css"

const Currency = (props)=>{
  const {curselect,selectCurrency,changeCurrency,amount} = props
  return(
    <div className="currency">
        <select value={selectCurrency} onChange={changeCurrency}>
        {curselect.map((data)=>
          <option key={data} value={data} >{data}</option>
        )}
      </select>
      <input type="number" value={amount}/>
    </div>
  )
}
export default Currency