import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { createTheme } from '@mui/material/styles';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import Dashboard from './Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ConstructionIcon from '@mui/icons-material/Construction';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import Logo from '../assets/logo.svg'

const NAVIGATION = [
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'AssetsIcon',
    title: 'Assets',
    icon: <AssessmentIcon />,
  },
  {
    segment: 'Booking',
    title: 'Booking',
    icon: <DirectionsCarIcon />,
  },
  {
    segment: 'Sell Cars',
    title: 'Sell Cars',
    icon: <LocalMallIcon />,
  },
  {
    segment: 'Buy Cars',
    title: 'Buy Cars',
    icon: <ShoppingCartIcon />,
  },
  {
    segment: 'Services',
    title: 'Services',
    icon: <ConstructionIcon />,
  },
  {
    segment: 'Calendar',
    title: 'Calendar',
    icon: <CalendarMonthIcon />,
  },
  {
    segment: 'Message',
    title: 'Message',
    icon: <MessageIcon />,
  },
  {
    segment: 'AssetsIcon',
    title: 'Setting',
    icon: <SettingsIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 800,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }) {
  return (
    <Box sx={{py: 1,}}>
      <Typography >
          <Dashboard />
          
      </Typography>
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};



function DashboardLayoutAccount(props) {

  const [session, setSession] = React.useState({
    user: {
      name: 'Bharat Kashyap',
      email: 'bharatkashyap@outlook.com',
      image: 'https://avatars.githubusercontent.com/u/19550456',
    },
  });

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: 'Bharat Kashyap',
            email: 'bharatkashyap@outlook.com',
            image: 'https://avatars.githubusercontent.com/u/19550456',
          },
        });
      },
      signOut: () => {
        setSession(null);
      },
    };
  }, []);
  

    const [pathname, setPathname] = React.useState('/dashboard');
  
    const router = React.useMemo(() => {
      return {
        pathname,
        searchParams: new URLSearchParams(),
        navigate: (path) => setPathname(String(path)),
      };
    }, [pathname]);
  


  return (
    <AppProvider
      session={session}
      authentication={authentication}
      navigation={NAVIGATION}
      theme={demoTheme}
      branding={{
        logo: <img src={Logo} alt=""  style={{marginTop: '6px', marginRight: "6px"}}/> ,
        title: (
          <span style={{ fontWeight: 'bold', color: '#1F2128', fontSize: '24px' }}>Motiv.</span> // Custom styles for title
        ),
      }}
    >
      <DashboardLayout defaultSidebarCollapsed>

        <DemoPageContent  pathname={pathname}/>
      </DashboardLayout>
    </AppProvider>
  );
}

export default DashboardLayoutAccount;