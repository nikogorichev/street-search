import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutFetch } from "../../redux/thunk/asyncUser";
import { ListItemIcon, Stack, styled, Switch } from "@mui/material";
import { ModeNight } from "@mui/icons-material";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = ({ mode, setMode }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElEvent, setAnchorElEvent] = React.useState(null);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenEventMenu = (event) => {
    setAnchorElEvent(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseEventMenu = () => {
    setAnchorElEvent(null);
  };

  const logoutUser = () => {
    dispatch(logoutFetch());
  };

  return (
    <AppBar
      position="sticky"
      sx={{ marginBottom: "5px", backgroundColor: "white", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "system-ui",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            <Link style={{ textDecoration: "none", color: "black" }} to={`/`}>
              SPORTSEARCH
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "black" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {user.name ? (
                <>
                  {" "}
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to={`/events`}
                      >
                        События
                      </Link>
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to={`/places`}
                      >
                        Площадки
                      </Link>
                    </Typography>
                  </MenuItem>{" "}
                </>
              ) : (
                <>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to={`/registration`}
                      >
                        Регистрация
                      </Link>
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to={`/login`}
                      >
                        Войти
                      </Link>
                    </Typography>
                  </MenuItem>{" "}
                </>
              )}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "system-ui",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link style={{ textDecoration: "none", color: "black" }} to={`/`}>
              SPORTSEARCH
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {user.name ? (
              <>
                {" "}
                <Button
                  onClick={handleOpenEventMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/events`}
                  >
                    События
                  </Link>
                </Button>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElEvent}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElEvent)}
                  onClose={handleCloseEventMenu}
                  sx={{
                    color: "black",
                    display: { xs: "none", md: "block" },
                  }}
                >
                  <MenuItem onClick={handleCloseEventMenu}>
                    <Typography textAlign="center">
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to={`/events`}
                      >
                        Все события
                      </Link>
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseEventMenu}>
                    <Typography textAlign="center">
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to={`/myevents`}
                      >
                        Мои события
                      </Link>
                    </Typography>
                  </MenuItem>{" "}
                  <MenuItem onClick={handleCloseEventMenu}>
                    <Typography textAlign="center">
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to={`/eventsplay`}
                      >
                        Где я играю
                      </Link>
                    </Typography>
                  </MenuItem>
                </Menu>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/places`}
                  >
                    Площадки
                  </Link>
                </Button>{" "}
              </>
            ) : (
              <>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/registration`}
                  >
                    Регистрация
                  </Link>
                </Button>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/login`}
                  >
                    Войти
                  </Link>
                </Button>{" "}
              </>
            )}
          </Box>
          {user.name && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Профиль">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {user.photo ? (
                    <>
                      <Avatar
                        src={user.photo}
                        sx={{ width: 55, height: 55 }}
                      ></Avatar>
                    </>
                  ) : (
                    <>
                      <Avatar
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 55, height: 55 }}
                      >
                        {user.name.slice(0, 1).toUpperCase()}
                      </Avatar>
                    </>
                  )}
                </IconButton>
              </Tooltip>
              <Menu
                sx={{
                  mt: "45px",
                  flexGrow: -1,
                }}
                // id="menu-appbar"
                id="basic-menu"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={`/profile`}
                    >
                      Профиль
                    </Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={`/`}
                      onClick={logoutUser}
                    >
                      Выйти
                    </Link>
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          )}
          <Box sx={{ml: 5}}>
            <ModeNight />
            <Switch
              onChange={() => setMode(mode === "light" ? "dark" : "light")}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
