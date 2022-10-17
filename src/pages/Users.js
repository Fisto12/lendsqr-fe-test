import { Box, Stack } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";

const Users = ({ Filters }) => {
  return (
    <Box sx={{ marginTop: "100px" }}>
      <Header />
      <Stack direction="row">
        <Sidebar />
        <Main Filters={Filters} />
      </Stack>
    </Box>
  );
};

export default Users;
