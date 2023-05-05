import React, { useState, useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import EventNoteTwoToneIcon from '@mui/icons-material/EventNoteTwoTone';
import PaidTwoToneIcon from '@mui/icons-material/PaidTwoTone';
import Inventory2TwoToneIcon from '@mui/icons-material/Inventory2TwoTone';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PocketBase from 'pocketbase';
import Payment from '../pages/Payment/Payment';
import Report_Izin from '../pages/Report_Izin/Report_Izin';
import Data_Siswa from '../pages/Data_Siswa/Data_Siswa';
import InputIcon from '@mui/icons-material/Input';

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [selectedNavbar, setSelectedNavbar] = useState(0);
  // const [data, setData] = useState({});

  const modelSidebar = ['Product', 'Event', 'Transaction', 'Keluhan'];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const drawerWidth = 240;

  const pb = new PocketBase('http://103.250.11.249:8090');

  async function sendDataChat() {
    const data = {
      chat_token: 'test',
      userfrom_token: 'test',
      reason: 123,
      userto_token: 'test',
      message: 'JSON',
    };

    const record = await pb.collection('chat_message').create(data);
  }

  const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    })
  );

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    backgroundColor: '#4b545c',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      backgroundColor: '#4b545c',
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

  // useEffect(() => {
  //   testWebsocket();
  // }, []);

  // async function getChat() {
  //   // Subscribe to changes in any chat_message record
  //   await pb.collection("chat_message").subscribe("*", function (e) {
  //     console.log();
  //     setData(e.record);{index == 7 ? <StarTwoToneIcon /> : <div></div>}
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#4b545c',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List
          style={{
            color: 'white',
          }}
        >
          {['Siswa', 'Report Izin', 'Payment', 'Insert Siswa'].map(
            (text, index) => (
              <ListItem
                key={text}
                disablePadding
                onClick={() => {
                  setSelectedNavbar(index);
                }}
              >
                <ListItemButton>
                  <ListItemIcon style={{ color: 'white' }}>
                    {index == 0 ? <Inventory2TwoToneIcon /> : <div></div>}
                    {index == 1 ? <EventNoteTwoToneIcon /> : <div></div>}
                    {index == 2 ? <PaidTwoToneIcon /> : <div></div>}
                    {index == 3 ? <InputIcon /> : <div></div>}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {selectedNavbar == 0 ? <Data_Siswa /> : <div></div>}
        {selectedNavbar == 1 ? <Report_Izin /> : <div></div>}
        {selectedNavbar == 2 ? <Payment /> : <div></div>}
      </Main>
    </Box>
  );
}
