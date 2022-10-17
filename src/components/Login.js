import {
  Box,
  Button,
  Card,
  InputBase,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
const Image = styled("img")({});
const Login = () => {
  return (
    <Box sx={{ margin: "50px" }}>
      <Stack
        direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
        spacing={2}
      >
        <Box sx={{ flex: 2 }}>
          <Box sx={{ display: "flex" }}>
            <Image
              sx={{ width: "24.75px", height: "25px", marginRight: "6px" }}
              src={process.env.PUBLIC_URL + "/images/Union.png"}
            />
            <Image
              sx={{ width: "138.44px", height: "36px" }}
              src={process.env.PUBLIC_URL + "/images/lendsqr.png"}
            />
          </Box>
          <Box sx={{ display: "flex" }}>
            <Image
              sx={{ width: {lg:"100%",xs:'100%'}, height: "407px", objectFit: "cover" }}
              src={process.env.PUBLIC_URL + "/images/pablo-sign-in 1.svg"}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 2,
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <Card
            sx={{
              position: "absolute",
              top: "70px",
              height: "auto",
              padding: "20px",
              background: "white",
            }}
          >
            <Box sx={{justifyContent:'center',textAlign:'center'}}>
              <Typography
              sx={{
                fontFamily: "Avenir Next",
                fontWeight: "bold",
                fontSize: "40px",
                lineHeight: "100%",
                color: "#213F7D",
                marginBottom: "10px",
                textAlign:{xs:'center',md:'left',lg:'left',sm:'center'}
              }}
            >
              Welcome!
            </Typography>
            <Typography
              gutterBottom
              sx={{
                font: "Avenir Next",
                fontWeight: 400,
                fontSize: "20px",
                color: "#545F7D",
                textAlign:{xs:'center',md:'left',lg:'left',sm:'center'}
              }}
            >
              Enter details to login
            </Typography>
            <InputBase
              placeholder="email"
              sx={{
                border: "1px solid black",
                borderRadius: "5px",
                padding: "5px",
                height: "50px",
                marginBottom: "10px",
                marginTop: "20px",
                width: {lg:"447px",xs:"250px"},
              }}
            />
            <InputBase
              type="password"
              placeholder="password"
              sx={{
                border: "1px solid black",
                margin: "auto",
                borderRadius: "5px",
                padding: "5px",
                height: "50px",
                width: {lg:"447px",xs:"250px"},
              }}
              endAdornment={
                <div style={{ color: "blue", cursor: "pointer" }}>show</div>
              }
            />
            <Typography
              sx={{
                color: "#39CDCC",
                height: "11px",
                marginTop: "10px",
              }}
            >
              Forgot password
            </Typography>
            <Button
              href="/dashboard"
              variant="contained"
              sx={{ marginTop: "20px", background: "#39CDCC", height: "48px" , width: {lg:"447px",xs:"250px"}}}
            >
              Login
            </Button>
            </Box>
          </Card>
        </Box>
      </Stack>
    </Box>
  );
};

export default Login;

