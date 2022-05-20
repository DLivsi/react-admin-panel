import React from "react";
import "./Sidebar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import AssessmentIcon from "@mui/icons-material/Assessment";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PersonIcon from "@mui/icons-material/Person";
import InventoryIcon from "@mui/icons-material/Inventory";
import PaidIcon from "@mui/icons-material/Paid";
import ForumIcon from "@mui/icons-material/Forum";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import WorkIcon from "@mui/icons-material/Work";
import HelpIcon from "@mui/icons-material/Help";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidbarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <LineStyleIcon className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <AssessmentIcon className="sidebarIcon" />
              Analitics
            </li>
            <li className="sidebarListItem">
              <TrendingUpIcon className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>

        <div className="sidbarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PersonIcon className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <InventoryIcon className="sidebarIcon" />
                Products
              </li>
            </Link>

            <li className="sidebarListItem">
              <PaidIcon className="sidebarIcon" />
              Transaction
            </li>
            <li className="sidebarListItem">
              <ForumIcon className="sidebarIcon" />
              Comments
            </li>
          </ul>
        </div>

        <div className="sidbarMenu">
          <h3 className="sidebarTitle">Notification</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <EmailIcon className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <MessageIcon className="sidebarIcon" />
              Messages
            </li>
            <li className="sidebarListItem">
              <DynamicFeedIcon className="sidebarIcon" />
              Feedback
            </li>
          </ul>
        </div>

        <div className="sidbarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkIcon className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <HelpIcon className="sidebarIcon" />
              Support
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
