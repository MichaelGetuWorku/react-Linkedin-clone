import React from "react";
import "./headerOption.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import LogoutIcon from "@mui/icons-material/Logout";

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="headerOPtions">
      {Icon && <Icon className="headerOPtion__icon" />}
      {avatar && (
        <LogoutIcon
          className="headerOPtion__icon"
          src={user?.email[0]}
        ></LogoutIcon>
      )}
      <h3 className="headerOPtion__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
