import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { SearchBar } from ".";
import logo from "../../assets/logo/logo.png"

const BroadCastNavbar = () => (
  <Stack height="9vh" direction="row" alignItems="center" p={2} sx={{ position: "sticky", background: '#fff', top: 0, justifyContent: "center", gap: "900px" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }} >
      <img src={logo} alt="" height={80} />
    </Link>

    <SearchBar />
  </Stack>
);

export default BroadCastNavbar;
