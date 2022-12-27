import React, {useState} from 'react'



export default function Textform(props) {
    
  const handleremove=()=>
  {
    setText("");
  }
   const handleup=()=>{
    setText(text.toUpperCase());
   }
   const handlechange=(event)=>{
    console.log("changed");
    setText(event.target.value);
   }
    const [text,setText]= useState('enter text');
    //const [text,setText]= useState('enter text');
  return (
    
    <div>
      <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handlechange} id="exampleFormControlTextarea1" rows="10" ></textarea>
    </div>
    <button className='btn btn-primary mx-2' onClick={handleup} >Change to uppercase</button>
    <button className='btn btn-primary mx-2' onClick={handleremove}>Remove</button>
    <div className="container my-2 " >
        <h1 style={{color:'whitesmoke'}}>summary</h1>
        <p>{`${text.length===0?0:text.split(" ").length}`} words and {text.length} characters</p>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).lenght} words and {text.length} characters</p>
    </div>
</div>

  )
}
