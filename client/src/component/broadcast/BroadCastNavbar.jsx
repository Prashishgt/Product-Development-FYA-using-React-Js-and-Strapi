import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { SearchBar } from ".";

const BroadCastNavbar = () => (
  <Stack height="9vh" direction="row" alignItems="center" p={2} sx={{ position: "sticky", background: '#fff', top: 0, justifyContent: "space-between" }}>
    <Link to="/feed" style={{ display: "flex", alignItems: "center" }} >
      <span style={{
        fontSize: "20px"
      }}>Fun Olympics</span>
    </Link>

    <SearchBar />
  </Stack>
);

export default BroadCastNavbar;
