import { Box } from "@mui/material";
import TopMain from "./TopMain";
import UserTable from "./UserTable";

const Main = ({ Filters }) => {
  return (
    <Box sx={{ flex: "70%", background: "#E5E5E5" }}>
      <TopMain />
      <UserTable Filters={Filters} />
    </Box>
  );
};

export default Main;
