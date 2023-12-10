import React, { useEffect,useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';


function Transaction({transaction}) {
    
    const sign = transaction.amount > 0 ? '+' : '-';
    const [borderColor , setBorderColor] = useState('');
    
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setDeleted] = useState(false);
    const { transactions, deleteTransaction } = useContext(GlobalContext);
    const [localTransactions, setLocalTransactions] = useState(transactions);


    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const handleDeleteClick = () => {
     // Update global state by calling deleteTransaction
      deleteTransaction(transaction.id);
  
      // Update the local state to reflect the deleted transaction
      // This is important for the template
      setLocalTransactions(localTransactions.filter((t) => t.id !== transaction.id));
    };

    useEffect(() => {
        if (transaction.amount < 0) {
          setBorderColor('red');
        } else {
          setBorderColor('green');
        }
      }, [transaction.amount]);
      
      console.log(borderColor);

    return (
    <div className={`border mb-2 justify-between rounded shadow flex py-3 px-2 border-r-${borderColor}-500 border-r-[6px] 
    ${isHovered ? 'bg-red-500 transition duration-500 ease-in' : 'transition duration-500 ease-out'}`}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
    <p>{transaction.name}</p>
    <p>
     {sign}${Math.abs(transaction.amount)}
     </p>
     {isHovered && (
        <div className='text-white cursor-pointer ' onClick={handleDeleteClick}>
          &#10006;
        </div>
      )}
 </div>
  )
}

export default Transaction
