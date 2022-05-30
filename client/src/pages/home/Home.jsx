import { Sidebar } from "../../components/sidebar/Sidebar"
import { Topbar } from "../../components/topbar/Topbar"
import { Transaction } from "../../components/transactions/Transaction"
import { UserList } from "../../components/userList/UserList"
import { transactionData } from "../../dummyData"
import "./home.css"

export const Home=()=>{
    const userData=JSON.parse(localStorage.getItem("userData"))
    console.log("localStorage",userData.user.role)
    return (
        <>
        <Topbar/>
        <div className="home">
        <Sidebar className="home-sidebar"/>
        <div className="home-rightbar">
            <h4>User List</h4>
            <UserList/>
            <h4>Transaction</h4>
          
            
            <Transaction className="transaction" data={transactionData}/>
         

        </div>
        </div>
        </>
    )
}