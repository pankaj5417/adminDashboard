import { Chat, Notifications, Person, Search } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import { Link, useNavigate } from "react-router-dom";
import "./topbar.css";
export const Topbar = () => {
  const loginStatus=JSON.parse(localStorage.getItem("loginStatus"))
  const navigate=useNavigate()
  const logoutUser=()=>{
    localStorage.removeItem("loginStatus")
    localStorage.removeItem("userData")
    navigate("/login")
  }

  return (
    <>
      <div className="topbarContainer">
        <div className="topbarLeft">
          {loginStatus?
          <Link to="/home" style={{ textDecoration: "none" }}>
            <h4>Dasboard</h4>
          </Link>:""
          }
        </div>

        <div className="topbarRight">
          {loginStatus?
          <h4 style={{cursor:"pointer"}} className="" onClick={logoutUser}>Logout</h4>:
          <Link to="/login" style={{ textDecoration: "none" }}>
            <h4>Login</h4>
          </Link>
          
          }
          <Link to="/" style={{ textDecoration: "none" }}>
            <h4>Singup</h4>
          </Link>
        </div>
      </div>
    </>
  );
};
