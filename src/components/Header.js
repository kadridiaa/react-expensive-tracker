import React from 'react'

function Header() {
  return (
    <div className='w-[80%]  md:w-[25%]  flex flex-col items-center'>
      {/* head title */}
      <h1 className='text-center text-2xl font-[500] m-3 pt-5 pb-3'>Expense Tracker</h1>
      {/* your balance */}
      <div className='flex flex-col items-start w-full'>
        <h2 className='font-[500]'>YOUR BALANCE</h2>
        <p className='text-2xl text font-[600]'>$260.00</p>
      </div>
      {/* INCOME AND EXPENES */}
      <div className='flex rounded border-[2px] shadow m-5 justify-evenly w-full text-center'>
        {/* the INCOME */}
        <div className='flex flex-col py-3 justify-center'>
           <p className='font-bold'>
            INCOME
            <br />
            <span className='text-xl text-green-500 font-[500]'>$500.00</span>
           </p>
        </div>
        <div className='text-6xl text-gray-200 font-[10] pt-1.5'>
            |
        </div>
        {/* the expenses */}
        <div className='flex flex-col py-5 '>
           <p className='font-bold'>
            EXPENSE
            <br />
            <span className='text-xl text-red-500 font-[500]'>$260.00</span>
           </p>
        </div>
      </div>
    </div>
  )
}

export default Header
