import { Box, Stack } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import MainUserDetails from "../components/MainUserDetails";
import Sidebar from "../components/Sidebar";

const UserDetails = () => {
  return (
    <Box>
      <Header />
      <Stack direction="row">
        <Sidebar />
        <MainUserDetails />
      </Stack>
    </Box>
  );
};

export default UserDetails;
