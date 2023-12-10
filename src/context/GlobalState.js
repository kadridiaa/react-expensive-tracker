import React , { createContext , useReducer, useState } from "react";
import AppReducer from "./AppReducer";


const initialState = {
    transactions :[
        {id:1,name:"Flower",amount:-20},
        {id:2,name:"Salary",amount:300},
        {id:3,name:"Book",amount:-10},
        {id:4,name:"Camera",amount:150},
    ]
}

// create context
export const GlobalContext = createContext(initialState);

//provider component 
export const GlobalProvider = ({children}) =>{
    const [state , dispatch] = useReducer(AppReducer , initialState)
    const deleteTransaction = (id) => {
        dispatch({ type: "DELETE_TRANSACTION", payload : id });
      };
    
    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction, // Make the deleteTransaction function available in the context
      }}>
        {children}
    </GlobalContext.Provider>)
} 
