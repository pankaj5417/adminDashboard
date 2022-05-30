import {Route,Routes} from 'react-router-dom'
import './App.css';
import {Sidebar} from './components/sidebar/Sidebar';
import { transactionData } from './dummyData';
import { Login } from './pages/login/Login';
import { Transaction } from './components/transactions/Transaction';
import {UserList}from './components/userList/UserList';
import { Home } from './pages/home/Home';
import { SignUp } from './pages/signup/Signup';
import { Topbar } from './components/topbar/Topbar';

function App() {
  return (
    <>
    
     <Topbar/>
    <div className="container">
      <Routes>
      <Route path="/login" element={<Login/>}></Route> 
      <Route path="/signup" element={<SignUp/>}></Route> 


        <Route path="/users" element={<UserList/>}></Route> 
        <Route path="/" element={<Home/>}></Route> 

        <Route path="/transaction" element={<Transaction data={transactionData}/>}></Route> 

        {/* <Route path="/" element={<Sidebar/>}></Route> */}
       

      </Routes>
    </div>
    </>
  );
}

export default App;
