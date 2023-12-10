import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction';

function History() {

  const {transactions}  = useContext(GlobalContext);
  
  
  return (
    <div className='w-[80%] md:w-[25%] flex flex-col'>
        <h2 className='border-b-2 my-2 pb-2 text-xl font-[500]'>History</h2>
        {/* Cash , Book and Camera statics DIV */}
        <div className='flex flex-col w-full my-2'>
            {/* cash div */}

            {transactions.map(transaction =>(
              <Transaction key={transaction.id} transaction={transaction}/>
            ))}
            
           
        </div>
    </div>
  )
}

export default History
