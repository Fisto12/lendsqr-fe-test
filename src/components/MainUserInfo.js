import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";

const MainUserInfo = ({ usersData }) => {
  return (
    <Card
      sx={{
        height: "auto",
        margin: "40px",
        width: {lg:'90%',xs:"120%",md:"90%",sm:"90%"},
      }}
    >
      <Box
        sx={{
          margin: "30px",
          color: "#213F7D",
          fontWeight: 500,
          fontSize: "16px",
        }}
      >
        PERSONAL INFORMATION
      </Box>
      <Grid
        container
        spacing={1}
        sx={{
          display: "flex",
          gap: { xs: 5, lg: 1.9 },
          margin: "20px",
          color: "#545F7D",
          paddingBottom: "20px",
          borderBottom: "1px solid #213F7D",
        }}
      >
        <Grid item lg={2.2} md={3} sm={4} xs={5}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontSize: "12px" }}>FULL NAME</Typography>
            <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
              {usersData?.profile?.firstName +
                " " +
                usersData?.profile?.lastName}
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={2.2} md={3} sm={4} xs={5}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontSize: "12px" }}>PHONE NUMBER</Typography>
            <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
              {usersData?.phoneNumber}
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={2.2} md={3} sm={4} xs={5}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontSize: "14px" }}>EMAIL ADDRESS</Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                marginLeft: { lg: "-70px", xs: "-28px" },
                marginTop: "-3px",
              }}
            >
              {usersData.email}
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={2.2} md={3} sm={4} xs={5}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginLeft: { xs: "8px" },
            }}
          >
            <Typography sx={{ fontSize: "12px" }}>BVN</Typography>
            <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
              {usersData?.profile?.bvn}
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={2.2} md={3} sm={4} xs={5}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontSize: "12px" }}>GENDER</Typography>
            <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
              {usersData?.profile?.gender}
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={2.2} md={3} sm={4} xs={5}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontSize: "12px" }}>CHILDREN</Typography>
            <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
              None
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={2.2} md={3} sm={4} xs={5}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontSize: "12px" }}>TYPE OF RESIDENCE</Typography>
            <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
              Parent's Apartment
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          margin: "30px",
          color: "#213F7D",
          fontWeight: 500,
          fontSize: "16px",
        }}
      >
        EDUCATION AND EMPLOYMENT
      </Box>
      <Grid
        container
        spacing={1}
        sx={{
          display: "flex",
          gap: { xs: 5, lg: 2 },
          margin: "20px",
          color: "#545F7D",
          paddingBottom: "20px",
          borderBottom: "1px solid #213F7D",
        }}
      >
        <Grid item lg={2.2} md={3} sm={4} xs={5}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontSize: "12px" }}>
              LEVEL OF EDUCATION
            </Typography>
            <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
              {usersData?.education?.level}
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={2.2} md={3} sm={4} xs={5}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontSize: "12px" }}>EMPLOYMENT STATUS</Typography>
            <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
              {usersData?.education?.employmentStatus}
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={2.2} md={3} sm={4} xs={5}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontSize: "12px" }}>
              SECTOR OF EMPLOYMENT
            </Typography>
            <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
              {usersData?.education?.sector}
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={2.2} md={3} sm={4} xs={5}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontSize: "12px" }}>
              DURATION OF EMPLOYMENT
            </Typography>
            <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
              {usersData?.education?.duration}
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={2.2} md={3} sm={4} xs={5}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontSize: "12px" }}>OFFICE EMAIL</Typography>
            <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
              {usersData?.education?.officeEmail}
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={2.2} md={3} sm={4} xs={5}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontSize: "12px" }}>MONTHLY INCOME</Typography>
            <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
              #{usersData?.education?.monthlyIncome[0]}
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={2.2} md={3} sm={4} xs={5}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontSize: "12px" }}>LOAN REPAYMENT</Typography>
            <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
              {usersData?.education?.loanRepayment}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          margin: "30px",
          color: "#213F7D",
          fontWeight: 500,
          fontSize: "16px",
        }}
      >
        SOCIALS
      </Box>
      <Grid
        container
        spacing={1}
        sx={{
          display: "flex",
          gap: { xs: 5, lg: 2 },
          margin: "20px",
          color: "#545F7D",
          paddingBottom: "20px",
          borderBottom: "1px solid #213F7D",
        }}
      >
        <Grid item lg={2.2} md={3} sm={4} xs={5}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontSize: "12px" }}>TWITTER</Typography>
            <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
              {usersData?.socials?.twitter}
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={2.2} md={3} sm={4} xs={5}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontSize: "12px" }}>FACEBOOK</Typography>
            <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
              {usersData?.socials?.facebook}
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={2.2} md={3} sm={4} xs={5}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontSize: "12px" }}>Instagram</Typography>
            <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
              {usersData?.socials?.instagram}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          margin: "30px",
          color: "#213F7D",
          fontWeight: 500,
          fontSize: "16px",
        }}
      >
        GUARANTOR
      </Box>
      <Grid
        container
        spacing={1}
        sx={{
          display: "flex",
          gap: { xs: 5, lg: 2 },
          margin: "20px",
          color: "#545F7D",
          paddingBottom: "20px",
        }}
      >
        <Grid item lg={2.2} md={3} sm={4} xs={5}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontSize: "12px" }}>GUARANTOR</Typography>
            <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
              {usersData?.guarantor?.firstName +
                " " +
                usersData?.guarantor?.lastName}
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={2.2} md={3} sm={4} xs={5}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontSize: "12px" }}>PHONE NUMBER</Typography>
            <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
              {usersData?.guarantor?.phoneNumber}
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={2.2} md={3} sm={4} xs={5}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontSize: "12px" }}> ADDRESS</Typography>
            <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
              {usersData?.guarantor?.address}
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={2.2} md={3} sm={4} xs={5}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontSize: "12px" }}>RELATIONSHIP</Typography>
            <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
              {usersData?.guarantor?.relationship}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default MainUserInfo;
