import * as React from 'react';
import { useRouter } from 'next/router';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { Typography, Toolbar, ListItem,
         ListItemButton, ListItemIcon,
         ListItemText, List, IconButton, 
         Drawer, Divider, CssBaseline, Box, AppBar } from '@mui/material';
import { Dashboard, Inventory2Outlined, LogoutOutlined } from '@mui/icons-material';
import { YarigaLogo } from '../../assets';
import { Container } from '@mui/system';
const drawerWidth = 240;

interface Props {

  window?: () => Window;
}

export const Sidebar = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const router = useRouter();
  const isSelectedDashboard = router.pathname === '/Dashboard';
  const isSelectedProduct = router.pathname === '/AllProducts';
  const drawer = (
    <div>
      <Container sx={{mt: 2.5, alignItems:"center"}}>
        <Box ml={2.5}>
          <YarigaLogo />
        </Box>
      </Container>
      <Toolbar />
      <List>
          <Link href="/Dashboard">
          <ListItem key={router.pathname}>
            <ListItemButton selected={isSelectedDashboard ? true : false} sx={{
              "&.Mui-selected": {
                "&:hover": {
                  backgroundColor: isSelectedDashboard ? "#1e36e8" : "transparent",
                },
                backgroundColor: isSelectedDashboard ? "#475be8" : "transparent",
              },
                justifyContent: "center",
                margin: "10px auto",
                borderRadius: "12px",
                minHeight: "56px",
                width: "90%",
                mt: -2,
            }}>
              <ListItemIcon sx={{
                  pl: 2,
                  py: 1,
                  ml: -2,
                  justifyContent: "center",
                  minWidth: 36,
                  color: isSelectedDashboard ? "#fff" : "#808191",
                }}>
                <Dashboard />
              </ListItemIcon>
              <ListItemText primary="Dashboard" primaryTypographyProps={{
                  noWrap: true,
                  fontSize: "16px",
                  fontWeight: isSelectedDashboard ? "bold" : "normal",
                  color: isSelectedDashboard ? "#fff" : "#808191",
                  marginLeft: "10px"
                }} />
            </ListItemButton>
          </ListItem>
          </Link>
      </List>

      <List>
          <Link href="/AllProducts">
          <ListItem>
            <ListItemButton selected={isSelectedProduct ? true : false} sx={{
              "&.Mui-selected": {
                "&:hover": {
                  backgroundColor: isSelectedProduct ? "#1e36e8" : "transparent",
                },
                backgroundColor: isSelectedProduct ? "#475be8" : "transparent",
              },
                justifyContent: "center",
                margin: "10px auto",
                borderRadius: "12px",
                minHeight: "56px",
                width: "90%",
                mt: -2
            }}>
              <ListItemIcon sx={{
                  pl: 2,
                  py: 1,
                  ml: -2,
                  justifyContent: "center",
                  minWidth: 36,
                  color: isSelectedProduct ? "#fff" : "#808191",
                }}>
                <Inventory2Outlined />
              </ListItemIcon>
              <ListItemText primary="Products" primaryTypographyProps={{
                  noWrap: true,
                  fontSize: "16px",
                  fontWeight: isSelectedProduct ? "bold" : "normal",
                  color: isSelectedProduct ? "#fff" : "#808191",
                  marginLeft: "10px"
                }} />
            </ListItemButton>
          </ListItem>
          </Link>
      </List>

      <List>
          <Link href="/AllProducts">
          <ListItem>
            <ListItemButton sx={{
              "&.Mui-selected": {
                "&:hover": {
                },
              },
                justifyContent: "center",
                margin: "10px auto",
                borderRadius: "12px",
                minHeight: "56px",
                width: "90%",
                mt: -2
            }}>
              <ListItemIcon sx={{
                  pl: 2,
                  py: 1,
                  ml: -2,
                  justifyContent: "center",
                  minWidth: 36,
                  color: "#808191",
                }}>
                <LogoutOutlined />
              </ListItemIcon>
              <ListItemText primary="Logout" primaryTypographyProps={{
                  noWrap: true,
                  fontSize: "16px",
                  fontWeight:"normal",
                  color: "#808191",
                  marginLeft: "10px"
                }} />
            </ListItemButton>
          </ListItem>
          </Link>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow: "none",
        }}
        style={{ background: "#fcfcfc" }}
      >
        <Toolbar>
          <IconButton
            style={{ color: "#fcfcfc", background: "#475be8"}}
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3}}
      >
      </Box>
    </Box>
  );
}

export default Sidebar