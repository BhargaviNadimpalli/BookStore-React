import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import '../css/footer.css'
export default function Footer() {
  return (
    <div className="footer">
      <AppBar position="static" style={{ backgroundColor: "#2E1D1E" }}>
        <Toolbar>
          <Typography
            variant="h6"
            className = "copyright"
          >
            Copyright © 2021, eBookstore Private Limited. All Rights Reserved.
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}