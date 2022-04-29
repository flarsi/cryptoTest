import React from "react";
import AppBar from "@mui/material/AppBar";
import BarChartIcon from "@mui/icons-material/BarChart";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
export default function Header() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <BarChartIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            CoinGecko Market Pairs (USD)
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
