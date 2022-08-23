import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import LocalizedStrings from 'react-localization';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
//import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
//import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
//import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
//import AccountCircle from '@mui/icons-material/AccountCircle';
import PropTypes from 'prop-types';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Stack } from '@mui/material';


const settings = ['Profile', 'Dashboard', 'Logout'];

let strings = new LocalizedStrings({
  en: {Calendar: "Calendar",
  Venueinfo: "Venue Info",
  Help: "Help",
  title: "ARMY WEEK 2022"
  },
  fr: {Calendar: "Calendrier",
  Venueinfo: "L'information du site",
  Help: "Aide",
  title: "SEMAINE DE L'ARMÉE 2022"
  }
})


const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };



  const LinkBehavior = React.forwardRef((props, ref) => {
    const { href, ...other } = props;
    // Map href (MUI) -> to (react-router)
    return <RouterLink data-testid="custom-link" ref={ref} to={href} {...other} />;
  });

  LinkBehavior.propTypes = {
    href: PropTypes.oneOfType([
      PropTypes.shape({
        hash: PropTypes.string,
        pathname: PropTypes.string,
        search: PropTypes.string,
      }),
      PropTypes.string,
    ]).isRequired,
  };

  function Router(props) {
    const { children } = props;
    if (typeof window === 'undefined') {
      return <StaticRouter location="/">{children}</StaticRouter>;
    }

    return <MemoryRouter>{children}</MemoryRouter>;
  }

  Router.propTypes = {
    children: PropTypes.node,
  };

  const theme = createTheme({
    components: {
      MuiLink: {
        defaultProps: {
          component: LinkBehavior,
        },
      },
      MuiButtonBase: {
        defaultProps: {
          LinkComponent: LinkBehavior,
        },
      },
    },
  });



  return (


    <AppBar position="static" color="success">
      <Container maxWidth="xl" color="#43A047">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {strings.title}
          </Typography>

          <Box sx={{ flexGrow: 5, display: { xs: 'flex', md: 'none' } }}>
          {/*<Tooltip title="Open settings">
              <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            </Tooltip>*/}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >

                <MenuItem>
                  <Router>
                      <Stack spacing={2}>
                        <Button href="/calendar" color="success" target="_self" variant="contained">
                        {strings.Calendar}
                        </Button>
                        <Button href="/venueinfo" color="success" target="_blank" variant="contained">
                        {strings.Venueinfo}
                        </Button>
                        {/* <Button href="/messages" color="success" target="_blank" variant="contained">
                        Messages
                        </Button> */}
                        <Button href="/faq" color="success" target="_self" variant="contained">
                        {strings.Help}
                        </Button>
                        </Stack>
                    </Router>
                </MenuItem>

            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ARMY WEEK 2022
          </Typography>
          <Box sx={{ flexGrow: 5, display: { xs: 'none', md: 'flex',} }}>
            <ButtonGroup spacing={2} direction="row" variant="contained" aria-label="outlined primary button group">
                <ThemeProvider theme={theme}>
                    <Router>
                    <Button href="/calendar" color="success" target="_top" variant="contained">
                        {strings.Calendar}
                        </Button>
                        <Button href="/venueinfo" color="success" target="_blank" variant="contained">
                        {strings.Venueinfo}
                        </Button>
                        {/* <Button href="/messages" color="success" target="_blank" variant="contained">
                        Messages
                        </Button> */}
                        <Button href="/faq" color="success" target="_top" variant="contained">
                        {strings.Help}
                        </Button>
                    </Router>

      </ThemeProvider>
      </ButtonGroup>

          </Box>

          {/*<Box>
            <Tooltip title="Open settings">
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar2"
                aria-haspopup="true"
                onClick={handleOpenUserMenu}
                color="inherit"
                textAlign="right"
              >
                <AccountCircle />
              </IconButton>

            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar2"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>*/}
        </Toolbar>
      </Container>
    </AppBar>

  );
};
export default ResponsiveAppBar;