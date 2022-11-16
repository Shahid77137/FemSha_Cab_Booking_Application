// import { AppBar, Avatar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
// import { deepOrange } from '@mui/material/colors';
// import MenuIcon from '@mui/icons-material/Menu';
// import React from 'react';

// const BookRideNavbar = () => {
//   return (
//     <Box className=''>
//       <AppBar sx={{ backgroundColor: '#120E43' }} className='' position='static'>
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             FemSha Cab
//           </Typography>
//           {true ? (
//             <Avatar className="cursor-pointer" sx={{ bgcolor: deepOrange[500] }}>
//               A
//             </Avatar>
//           ) : (
//             <Button color="inherit">
//               Login
//             </Button>
//           )}
//         </Toolbar>
//       </AppBar>
//       {/* <Drawer anchor={"left"} open={sidebarOpen} onClose={handleSidebarClose}>
//           {drawerList("left")}
//       </Drawer> */}
//     </Box>
//   );
// }

// export default BookRideNavbar;




import { AppBar, Avatar, Box, Button, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import MenuIcon from '@mui/icons-material/Menu';
// import IconButton from '@mui/material/IconButton';
import { drawerList } from './DrawerList';
import React from 'react'
import { useState } from 'react';

const BookRideNavbar = () => {
  const [sidebarOpen,setSideBarOpen] = useState(false);
  const handleSidebarClose = () => setSideBarOpen(false);
  const handleSidebarOpen = () => setSideBarOpen(true);
  return (
        <Box className=''>
            <AppBar sx={{backgroundColor:'#120E43'}} className='' position='static'>
                <Toolbar>
                    <IconButton
                     size="large"
                     edge="start"
                     color="inherit"
                     aria-label="menu"
                     sx={{mr:2}}
                     onClick = {handleSidebarOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                        FemSha Cab
                    </Typography>
                    {true ? (
                        <Avatar
                         className="cursor-pointer"
                          sx={{bgcolor:deepOrange[500]}}
                        >
                        
                            SF
                        </Avatar>
                    ) : (
                        <Button color="inherit">
                            Login
                        </Button>
                    )}
                </Toolbar>
            </AppBar>
            <Drawer anchor={"left"} open={sidebarOpen} onClose={handleSidebarClose}>
                {drawerList("left")}
            </Drawer>
        </Box>
  )
}

export default BookRideNavbar;






// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

// export default function ButtonAppBar() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             News
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }