import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItems">
      <span className="sidebar__hash">
        <p>#{topic}</p>
      </span>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Jgn6GNUJHcAgrpLo_96CfQHaEo%26pid%3DApi%26h%3D160&f=1"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user.email[0]}
          {/* //if it doesn't have a pic */}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,555</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,742</p>
        </div>
        <div className="sidebar__recentItems space ">
          <div className="sidebar__stat">
            <p>Connections</p>
            <p className="sidebar__statNumber">2</p>
          </div>
          <div className="sidebar__stat">
            <p>Grow Your network</p>
          </div>
        </div>
      </div>

      <div className="sidebar__button">
        <p>Recent</p>
        {recentItem("ReactJs")}
        {recentItem("Flutter and Dart")}
        {recentItem("NodeJs")}
        {recentItem("Figma")}
        <p>Groups</p>
        {recentItem("Front End Developer Group")}
        {recentItem("UI/UX Group ")}
        <div className="sidebar__events">
          <p>Events</p>
          <AddIcon className="icon" />
        </div>
      </div>
      <div className="sidebar__stats">
        <p>Discover More</p>
      </div>
    </div>
  );
}

export default Sidebar;
