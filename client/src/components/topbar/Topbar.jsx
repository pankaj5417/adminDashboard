import { Chat, Notifications, Person, Search } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import { Link } from "react-router-dom";
import "./topbar.css";
export const Topbar = () => {
  return (
    <>
      <div className="topbarContainer">
        <div className="topbarLeft">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h4>Dasboard</h4>
          </Link>
        </div>

        <div className="topbarRight">
          <Link to="/login" style={{ textDecoration: "none" }}>
            <h4>Login</h4>
          </Link>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <h4>Singup</h4>
          </Link>
        </div>
      </div>
    </>
  );
};
