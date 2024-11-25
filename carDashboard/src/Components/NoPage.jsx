import React, { useState, useEffect } from 'react';
import './NoPage.scss'; 
import { Outlet, Link } from "react-router-dom";

const ErrorPage = () => {
  const [displayText, setDisplayText] = useState('');
  const str = `> ERROR CODE: "HTTP 404 Forbidden"
> ERROR DESCRIPTION: "Access Denied. You Do Not Have The Permission To Access This Page On This Server"
> ERROR POSSIBLY CAUSED BY: [execute access forbidden, read access forbidden, write access forbidden, ssl required, ssl 128 required, ip address rejected, client certificate required, site access denied, too many users, invalid configuration, password change, mapper denied access, client certificate revoked, directory listing denied, client access licenses exceeded, client certificate is untrusted or invalid, client certificate has expired or is not yet valid, passport logon failed, source access denied, infinite depth is denied, too many requests from the same client ip...]
> SOME PAGES ON THIS SERVER THAT YOU DO HAVE PERMISSION TO ACCESS: [Home Page, About Us, Contact Us, Blog...]
> HAVE A NICE DAY SIR AXLEROD :-)`;

  useEffect(() => {
    let i = 0;
    setDisplayText('');
    const timeoutId = setTimeout(() => {
      const intervalId = setInterval(() => {
        i++;
        setDisplayText(str.slice(0, i) + '|'); // Add cursor symbol
        if (i === str.length) {
          clearInterval(intervalId);
          setDisplayText(str); // Remove cursor and show full text
        }
      }, 10);
    }, 0);

    return () => {
      clearTimeout(timeoutId); // Clean up the timeout if the component unmounts
    };
  }, []); // Empty dependency array to run only once on mount

  return (
    <div className="error-page">
      <h1>404</h1>
      <div>
        <p>{displayText}</p>
        <p>
           <span>SOME PAGES ON THIS SERVER THAT YOU DO HAVE PERMISSION TO ACCESS</span>: [ <Link to='/'>Home</Link> ]
        </p>
        <p> <span>HAVE A NICE DAY SIR AXLEROD :-)</span></p>
      </div>
      <a href="/" className="avatar"></a>
    </div>
  );
};

export default ErrorPage;
