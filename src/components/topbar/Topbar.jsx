import React from "react";
import "./Topbar.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from '@mui/icons-material/Settings';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Cabitorium</span>
        </div>
        <div className="topRight">
          <div className="topbarIconsContainer">
            <NotificationsNoneIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconsContainer">
            <SettingsIcon />
          </div>
          <img src="https://avatars.mds.yandex.net/get-pdb/5422207/819210e9-594a-4536-abd6-14a8f230107b/s1200" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
