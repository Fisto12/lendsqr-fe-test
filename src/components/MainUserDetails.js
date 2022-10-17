import { ArrowBack } from "@mui/icons-material";
import { Box, Button, Typography, Card, Avatar, Rating } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { Tab, Tabs, TabList } from "react-tabs";
import MainUserInfo from "./MainUserInfo";

const MainUserDetails = () => {
  const id = useParams().id;
  let results = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  let usersData = results.find((result) => result.id === id);

  return (
    <Box sx={{ background: "white", width: "80%", marginTop: "100px" }}>
      <Box sx={{ margin: "40px" }}>
        <Box sx={{ display: "flex" }}>
          <ArrowBack />
          <Link to="/Users">
            <Typography
              sx={{
                color: "#545F7D",
                fontSize: "16px",
                fontFamily: "Work Sans",
              }}
            >
              Back to users
            </Typography>
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
            flexDirection: { lg: "row", md: "row", xs: "column" },
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "#213F7D",
                fontWeight: 500,
                fontSize: "24px",
                height: "28px",
              }}
            >
              User Details
            </Typography>
          </Box>
          <Box sx={{ marginTop: { xs: "10px" } }}>
            <Button
              sx={{
                color: "#39CDCC",
                border: "1px solid #39CDCC",
                marginRight: "8px",
              }}
              variant="outlined"
            >
              BLACKLIST USER{" "}
            </Button>
            <Button
              variant="outlined"
              sx={{ color: "#E4033B", border: "1px solid #E4033B" }}
            >
              ACTIVATE USER{" "}
            </Button>
          </Box>
        </Box>
      </Box>
      <Box>
        <Card
          sx={{
            width: '100%',
            margin: "40px",
            height: "210px",
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              position: "absolute",
              top: "30px",
              left: "30px",
            }}
          >
            <Avatar
              src={usersData?.profile?.avatar}
              sx={{
                marginTop: { xs: "8px" },
                width: { lg: "100px", md: "100px", xs: "40px" },
                height: { lg: "100px", md: "100px", xs: "40px" },
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "18px",
                marginLeft: "20px",
                borderRight: "1px solid #545F7D",
                padding: { lg: "10px", md: "10px", xs: "1px" },
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: { lg: "14px", md: "14px", xs: "9px" },
                  color: "#213F7D",
                }}
              >
                {usersData?.profile?.firstName +
                  " " +
                  usersData?.profile?.lastName}
              </Typography>
              <Typography
                sx={{
                  fontSize: { lg: "14px", md: "14px", xs: "9px" },
                  color: "#545F7D",
                }}
              >
                {usersData?.phoneNumber}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "25px",
                marginLeft: "20px",
                borderRight: "1px solid #545F7D",
                padding: { lg: "10px", md: "10px", xs: "1px" },
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#213F7D",
                  fontSize: { lg: "14px", md: "14px", xs: "9px" },
                  fontWeight: 500,
                }}
              >
                Users tier
              </Typography>
              <Box>
                <Rating name="read-only" defaultValue={2.5} precision={0.5} />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "18px",
                marginLeft: "20px",
                padding: { lg: "10px", md: "10px", xs: "1px" },
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: { lg: "14px", md: "14px", xs: "9px" },
                  color: "#213F7D",
                  fontWeight: 500,
                }}
              >
                #{usersData?.accountBalance}
              </Typography>
              <Typography
                sx={{ fontSize: { lg: "14px", md: "14px", xs: "9px" } }}
              >
                {usersData?.accountNumber} Gtbank
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "180px",
              left: "40px",
              width: "200%",
              overflow: "scroll",
            }}
          >
            <Tabs style={{ justifyContent: "space-between" }}>
              <TabList>
                <Tab>General Details</Tab>
                <Tab>Documents</Tab>
                <Tab>Bank Details</Tab>
                <Tab>Loans</Tab>
                <Tab>Savings</Tab>
                <Tab>App and System</Tab>
              </TabList>
            </Tabs>
          </Box>
        </Card>
      </Box>
      <MainUserInfo usersData={usersData} />
    </Box>
  );
};

export default MainUserDetails;
