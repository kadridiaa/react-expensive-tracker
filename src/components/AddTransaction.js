import React, { useState } from 'react'

function AddTransaction() {
  
  const [text , setText] = useState('');
  const [amount , setAmount] = useState(0);

  return (
    <div className='w-[80%]  md:w-[25%]  flex flex-col'>
    <h2 className='border-b-2 my-2 pb-2 text-xl font-[500]'>Add new transaction</h2>
    <h3 className='font-[500]'>Text</h3>
    {/* inputs divs */}
    <div className='w-full flex flex-col'>
        <input onChange={(e)=>setText(e.target.value)} value={text} className='focus:outline-none  border p-2 mt-2' type="text" placeholder='Enter a name for this transaction...' />
        <p className='pt-1 font-[600]'>Amount <br />(native - expense,positive - income)</p>
        <input  onChange={(e)=>setAmount(e.target.value)} value={amount}  className='focus:outline-none border p-2 mt-2' type="number" placeholder='Enter amount...' />
    </div>
    <button className='w-full text-center text-white bg-violet-500 my-3 py-2 '>Add transaction</button>
    </div>
  )
}

export default AddTransaction
