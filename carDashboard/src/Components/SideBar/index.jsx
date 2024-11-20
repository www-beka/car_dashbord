import { Outlet, Link } from "react-router-dom";
import './SideBar.scss'
import DashbordIcon from '../../assets/dashboard.svg'
import AssetsIcon from '../../assets/assets.svg'
import BookingIcon from '../../assets/car.svg'
import ShoopingIcon from '../../assets/shopping.svg'
import BagIcon from '../../assets/bag.svg'
import KnifeIcon from '../../assets/knife.svg'
import CalendarIcon from '../../assets/calendar.svg'
import MessageIcon from '../../assets/message.svg'
import SettingIcon from '../../assets/settings.svg'
import LogOutIcon from '../../assets/logOut.svg'
import Logo from '../../assets/logo.svg'
import NotificationIcon from '../../assets/notification.svg'
import ProfileIcon from '../../assets/profile.png'



const Layout = () => {
  return (
    <>
    <div className="navbar">
              <div className="search">
                <form action="">
                    <input type="search" />
                </form>
              </div>
              <div className="profile">
                <div className="notification"><img src={NotificationIcon} alt="noti" /></div>
                <img src={ProfileIcon} alt="profile" />
              </div>
          </div>
      <div className="bars-layout">
          <div className="sidebar">
              <div className="sidebar-top">
                  <div className="logo"><img src={Logo} alt="" /> <span>Motiv.</span></div>
                  <div className="categoris">
                      <div className="categori-items">
                        <img src={DashbordIcon} alt="Dashbord" />  <span>Dashbord</span>
                      </div>
                      <div className="categori-items">
                        <img src={AssetsIcon} alt="Assets" />  <span>Assets</span>
                      </div>
                      <div className="categori-items">
                        <img src={BookingIcon} alt="Booking" />  <span>Booking</span>
                      </div>
                      <div className="categori-items">
                        <img src={ShoopingIcon} alt="Sell cars" />  <span>Sell cars</span>
                      </div>
                      <div className="categori-items">
                        <img src={BagIcon} alt="Buy cars" />  <span>Buy cars</span>
                      </div>
                      <div className="categori-items">
                        <img src={KnifeIcon} alt="Services" />  <span>Services</span>
                      </div>
                      <div className="categori-items">
                        <img src={CalendarIcon} alt="Calender" />  <span>Calender</span>
                      </div>
                      <div className="categori-items">
                        <img src={MessageIcon} alt="Messages" />  <span>Messages</span>
                      </div>
                  </div>
              </div>
              <div className="sidebar-botoom">
                  <div className="categori-items">
                    <img src={SettingIcon} alt="Settings" /> <span>Settings</span>
                  </div>
                  <div className="categori-items">
                    <img src={LogOutIcon} alt="Log out" /> <span>Log out</span>
                  </div>
              </div>
          </div>
      </div>
          
      <Outlet />
    </>
  );
};

export default Layout;
