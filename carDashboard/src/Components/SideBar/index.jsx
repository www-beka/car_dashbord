import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="bars-layout">
          <div className="sidebar">
              <div className="sidebar-top">
                  <div className="logo"></div>
                  <div className="categoris">
                      <div className="categori-items">
                        <img src="" alt="Dashbord" />  <span>Dashbord</span>
                      </div>
                      <div className="categori-items">
                        <img src="" alt="Assets" />  <span>Assets</span>
                      </div>
                      <div className="categori-items">
                        <img src="" alt="Booking" />  <span>Booking</span>
                      </div>
                      <div className="categori-items">
                        <img src="" alt="Sell cars" />  <span>Sell cars</span>
                      </div>
                      <div className="categori-items">
                        <img src="" alt="Buy cars" />  <span>Buy cars</span>
                      </div>
                      <div className="categori-items">
                        <img src="" alt="Services" />  <span>Services</span>
                      </div>
                      <div className="categori-items">
                        <img src="" alt="Calender" />  <span>Calender</span>
                      </div>
                      <div className="categori-items">
                        <img src="" alt="Messages" />  <span>Messages</span>
                      </div>
                  </div>
              </div>
              <div className="sidebar-botoom">
                  <div className="settings">
                    <img src="" alt="Settings" /> <span>Settings</span>
                  </div>
                  <div className="logOut">
                    <img src="" alt="Log out" /> <span>Log out</span>
                  </div>
              </div>
          </div>
          <div className="navbar">
              <div className="search">
                <form action="">
                    <input type="search" />
                </form>
              </div>
              <div className="profile">
                <div className="notificarion"><img src="" alt="noti" /></div>
                <img src="" alt="profile" />
              </div>
          </div>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
