import {Route,Routes} from 'react-router-dom'
import './App.css';
import {Sidebar} from './components/sidebar/Sidebar';
import { transactionData } from './dummyData';
import { Transaction } from './pages/transactions/Transaction';
import {UserList}from './pages/userList/UserList';

function App() {
  return (
    <div className="container">
     
     <Sidebar/>
      <Routes>
        <Route path="/users" element={<UserList/>}></Route> 
        <Route path="/transaction" element={<Transaction data={transactionData}/>}></Route> 

        {/* <Route path="/" element={<Sidebar/>}></Route> */}
       

      </Routes>
    </div>
  );
}

export default App;
