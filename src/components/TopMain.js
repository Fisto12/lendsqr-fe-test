import { People, PeopleAltOutlined, PeopleTwoTone } from "@mui/icons-material";
import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";

const TopMain = () => {
  return (
    <Box sx={{ margin: "20px" }}>
      <Typography
        sx={{
          fontSize: "24px",
          fontFamily: "Work Sans",
          color: "#213F7D",
          margin: "20px",
          marginTop: "20px",
          fontWeight: 500,
        }}
      >
        Users
      </Typography>
      <Grid
        container
        spacing={1}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Grid item lg={3} md={4} sm={6}>
          <Card sx={{ height: "160px", width: "240px" }}>
            <Box sx={{ margin: "20px" }}>
              <PeopleTwoTone
                sx={{
                  backgroundColor: "#DF18FF",
                  borderRadius: "999px",
                  padding: "5px",
                  width: "40.45px",
                  height: "40px",
                  border: " 0.2px solid #DF18FF",
                }}
              />
              <Typography>Users</Typography>
              <Typography>2433</Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} sm={6}>
          <Card sx={{ height: "160px", width: "240px" }}>
            <Box sx={{ margin: "20px" }}>
              <People
                sx={{
                  background: "#5718FF",
                  borderRadius: "999px",
                  padding: "5px",
                  width: "40.45px",
                  height: "40px",
                  border: " 0.2px solid 5718FF",
                }}
              />
              <Typography>Active Users</Typography>
              <Typography>2433</Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} sm={6}>
          <Card sx={{ height: "160px", width: "240px" }}>
            <Box sx={{ margin: "20px" }}>
              <PeopleAltOutlined
                sx={{
                  background: "#F55F44",
                  borderRadius: "999px",
                  padding: "5px",
                  width: "40.45px",
                  height: "40px",
                  border: " 0.2px solid #F55F44",
                }}
              />
              <Typography>Users with loan</Typography>
              <Typography>2433</Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} sm={6}>
          <Card sx={{ height: "160px", width: "240px" }}>
            <Box sx={{ margin: "20px" }}>
              <People
                sx={{
                  background: "#FF3366",
                  borderRadius: "999px",
                  padding: "5px",
                  width: "40.45px",
                  height: "40px",
                  border: " 0.2px solid #FF3366",
                }}
              />
              <Typography>Users with savings</Typography>
              <Typography>2433</Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TopMain;
