import './App.css';
import AddTransaction from './components/AddTransaction';
import Header from './components/Header';
import History from './components/History';

import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <GlobalProvider >
     <div className='bg-gray-250 flex flex-col items-center'>
      <Header/>
      <History/>
      <AddTransaction/>
      </div> 
    </GlobalProvider>
  );
}

export default App;
