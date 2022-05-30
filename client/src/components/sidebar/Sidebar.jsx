import "./sidebar.css";
import { LineStyle, PermIdentity, AttachMoney } from "@mui/icons-material";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const loginStatus=JSON.parse(localStorage.getItem("loginStatus"))
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/home" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>

            <Link to="/transaction">
              <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                Transactions
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};
