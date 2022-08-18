import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { QrCodeScanner } from "@mui/icons-material";
import { MdOutlineHelp} from "react-icons/md";
import MoreIcon from '@mui/icons-material/MoreVert';
import HomeIcon from '@mui/icons-material/Home';

export default function Bottombar() {
  return(
<AppBar position="fixed" color="success" sx={{ top: 'auto', bottom: 0 }}>
<Toolbar>

<IconButton color="inherit" href="/" >
      < HomeIcon />
 </IconButton>

   <IconButton color="inherit" href="/faq" >
      < MdOutlineHelp />
 </IconButton>

 <IconButton color="inherit" href="/qrApp" >
      < QrCodeScanner />
 </IconButton>

 <Box sx={{ flexGrow: 12 }} />

 <IconButton color="inherit">
   <MoreIcon />
 </IconButton>


</Toolbar>
</AppBar>
)}