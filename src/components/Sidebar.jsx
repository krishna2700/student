import "./Sidebar.css";
import { LineStyle,Person,School,Event,PieChart } from "@mui/icons-material";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem">
              <LineStyle className="sidebaricon"/>
              Home
            </li>
            </Link>
            <Link to="/faculties" className="link">
            <li className="sidebarListItem">
              <Person className="sidebaricon"/>
              Faculties
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Admin Menu</h3>
          <ul className="sidebarList">
            <Link to="/Student list" className="link">
            <li className="sidebarListItem">
              <School className="sidebaricon"/>
              Student List
            </li>
            </Link>
            <Link to="/event registeration" className="link">
            <li className="sidebarListItem">
              <Event className="sidebaricon"/>
              Event Registration
            </li>
            </Link>
            
          </ul>
        </div>
        <div className="sidebarMenu">
          
          <h3 className="sidebarTitle">Pie Chart</h3>
          <ul className="sidebarList">
            <Link to="/pieChart" className="link">
            <li className="sidebarListItem">
              <PieChart className="sidebaricon"/>
              Pie chart
            </li>
           </Link>
            
          </ul>
        </div>
      </div>
    </div>
  );
}
