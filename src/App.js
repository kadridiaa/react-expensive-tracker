import './App.css';
import AddTransaction from './components/AddTransaction';
import Header from './components/Header';
import History from './components/History';

function App() {
  return (
    <div className='bg-gray-250 flex flex-col items-center'>
      <Header/>
      <History/>
      <AddTransaction/>
    </div>
  );
}

export default App;
