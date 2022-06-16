import { FC } from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Link } from "./link";

export const Navigation: FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        color: "#000",
        background: "#FFF",
      }}
    >
      <Toolbar variant="dense" sx={{ justifyContent: "center" }}>
        <Typography variant="h6" color="inherit" sx={{ px: 6 }}>
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Box component="span" sx={{ px: 5, color: "secondary.main" }}>
            {" "}
            •{" "}
          </Box>
          <Link
            color="inherit"
            href="https://www.meetup.com/slo-coders/events/"
            target="_blank"
            underline="hover"
          >
            Events
          </Link>
          <Box component="span" sx={{ px: 5, color: "secondary.main" }}>
            {" "}
            •{" "}
          </Box>
          <Link
            color="inherit"
            href="https://www.meetup.com/slo-coders/?action=join"
            target="_blank"
            underline="hover"
          >
            Join
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
