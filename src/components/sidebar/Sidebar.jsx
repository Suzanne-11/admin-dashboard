import React from 'react';
import './sidebar.scss';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import PersonIcon from '@mui/icons-material/Person';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';
import { Dashboard } from '@mui/icons-material';


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">AdminD</span>
        </div>
        <hr />
        <div className="center">
            <ul>
              <p className="title">MAIN</p>
                <li>
                  <SpaceDashboardIcon className='icon'/>
                  <span>Dashboard</span>
                </li>
                <p className="title">LISTS</p>
                <li>
                  <PersonIcon className='icon' />
                  <span>Users</span>
                </li>
                <li>
                  <CategoryIcon className='icon' />
                  <span>Products</span>
                </li>
                <li>
                  <ShoppingCartIcon className='icon' />
                  <span>Orders</span>
                </li>
                <li>
                  <LocalShippingIcon className='icon' />
                  <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                  <BarChartIcon className='icon' />
                  <span>Stats</span>
                </li>
                <li>
                  <NotificationsActiveIcon className='icon' />
                  <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                  <HealthAndSafetyIcon className='icon' />
                  <span>System Health</span>
                </li>
                <li>
                  <LibraryBooksIcon className='icon'/>
                  <span>Logs</span>
                </li>
                <li>
                  <SettingsIcon className='icon' />
                  <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                  <AccountCircleIcon className='icon' />
                  <span>Profile</span>
                </li>
                <li>
                  <ExitToAppIcon className='icon' />
                  <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
          <div className="color-options"></div>
          <div className="color-options"></div>
        </div>
    </div>
  )
}

export default Sidebar