import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
// import { Link as Linkk, animateScroll as scroll } from "react-scroll";
// import Typography from "./Typography";

import Home from "../../features/Home";
import Dashboard from "../../features/Dashboard";
import Transactions from "../../features/Transactions";
import Invoices from "../../features/Invoices";
import DarkModeToggle from "./DarkModeToggle";
// import PackageBadges from "./PackageBadges";
// import { PackageBadges } from "./PackageBadges";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";
import WalletRoundedIcon from "@mui/icons-material/WalletRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

//icons from react icons
// import { FaList, FaRegHeart } from "react-icons/fa";
// import {
//   FiHome,
//   FiLogOut,
//   FiArrowLeftCircle,
//   FiArrowRightCircle,
// } from "react-icons/fi";
// import { RiPencilLine } from "react-icons/ri";
// import { BiCog } from "react-icons/bi";
// import { SiApacheairflow } from "react-icons/si";
// import { GiAbstract050 } from "react-icons/gi";

import { Routes, Route, Link } from "react-router-dom";

const Sidenav = () => {
  //   menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);
  //custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar className="app" collapsed={menuCollapse}>
        <Menu>
          {/* <Tooltip
            title="Zoom In"
            arrow
            placement="right"
            hidden={menuCollapse ? true : false}
            followCursor
          > */}
          <MenuItem
            className="menu1"
            icon={
              <MenuRoundedIcon
                onClick={() => {
                  menuIconClick();
                }}
              />
            }
            component={<Link to="/" className="link" />}
          >
            <h2> Home</h2>
          </MenuItem>
          {/* </Tooltip> */}
          <br />
          <MenuItem
            icon={<GridViewRoundedIcon />}
            component={<Link to="dashboard" className="link" />}
          >
            {" "}
            Dashboard{" "}
          </MenuItem>
          <MenuItem
            icon={<ReceiptRoundedIcon />}
            component={<Link to="invoices" className="link" />}
          >
            {" "}
            Invoices{" "}
          </MenuItem>
          <SubMenu label="Charts" icon={<BarChartRoundedIcon />}>
            <MenuItem icon={<TimelineRoundedIcon />}> Timeline Chart </MenuItem>
            <MenuItem icon={<BubbleChartRoundedIcon />}>Bubble Chart</MenuItem>
          </SubMenu>
          <SubMenu label="Wallets" icon={<WalletRoundedIcon />}>
            <MenuItem icon={<AccountBalanceRoundedIcon />}>
              Current Wallet
            </MenuItem>
            <MenuItem icon={<SavingsRoundedIcon />}>Savings Wallet</MenuItem>
          </SubMenu>
          <MenuItem
            icon={<MonetizationOnRoundedIcon />}
            component={<Link to="transactions" className="link" />}
          >
            Transactions
          </MenuItem>
          <SubMenu label="Settings" icon={<SettingsApplicationsRoundedIcon />}>
            <MenuItem icon={<AccountCircleRoundedIcon />}> Account </MenuItem>
            <MenuItem icon={<ShieldRoundedIcon />}> Privacy </MenuItem>
            <MenuItem icon={<NotificationsRoundedIcon />}>
              Notifications
            </MenuItem>
          </SubMenu>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <MenuItem icon={<LogoutRoundedIcon />}> Logout </MenuItem>
        </Menu>
      </Sidebar>
      {/* <section>
        <h1>WELCOME TO QUICKPAY</h1>
      </section> */}
      <main>
        <div class="parent">
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="transactions" element={<Transactions />} />
              <Route path="invoices" element={<Invoices />} />
            </Routes>
          </div>
          <div>
            <DarkModeToggle />
          </div>
        </div>
        {/* <div class="containerr">
          <div class="itemm">
            <div>Left One</div>
          </div>
          <div class="divider"></div>
          <div class="itemm">
            <div>Right One</div>
          </div>
        </div> */}
      </main>
    </div>
  );
};
export default Sidenav;
