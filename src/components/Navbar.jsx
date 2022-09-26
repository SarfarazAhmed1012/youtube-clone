import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../utils/youtube.png";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
      backgroundColor: "rgba(92, 91, 91, 0.7)",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      <Typography
        variant="h4"
        component="h4"
        sx={{ color: "white", marginLeft: "10px" }}
      >
        YouthTube
      </Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
