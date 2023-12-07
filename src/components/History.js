import React from 'react'

function History() {
  return (
    <div className='w-[80%] md:w-[25%] flex flex-col'>
        <h2 className='border-b-2 my-2 pb-2 text-xl font-[500]'>History</h2>
        {/* Cash , Book and Camera statics DIV */}
        <div className='flex flex-col w-full my-2'>
            {/* cash div */}
            <div className='border mb-2 justify-between rounded shadow flex py-3 px-2 border-r-green-500 border-r-[6px]'>
               <p>Cash</p>
               <p>
                +500
                </p>
            </div>
            {/* Book div */}
            <div className='border mb-2 justify-between rounded shadow flex py-3 px-2 border-r-red-700 border-r-[6px]'>
               <p>Cash</p>
               <p>
                +500
                </p>
            </div>
            {/* Camera div */}
            <div className='border mb-2 justify-between rounded shadow flex py-3 px-2 border-r-red-700 border-r-[6px]'>
               <p>Cash</p>
               <p>
                +500
                </p>
            </div>
        </div>
    </div>
  )
}

export default History
