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
              sx={{ width: "100%", height: "407px", objectFit: "cover" }}
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
            justifiyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <Card
            sx={{
              position: "absolute",
              top: "70px",
              height: "360px",
              padding: "20px",
              background: "white",
            }}
          >
            <Typography
              align={xs:'center',lg:'left'}
              sx={{
                fontFamily: "Avenir Next",
                fontWeight: "bold",
                fontSize: "40px",
                lineHeight: "100%",
                color: "red",
                marginBottom: "10px",
              }}
            >
              Welcome!
            </Typography>
            <Typography
              align="left"
              gutterBottom
              sx={{
                font: "Avenir Next",
                fontWeight: 400,
                fontSize: "20px",
                color: "#545F7D",
              }}
            >
              Enter details to login
            </Typography>
            <InputBase
              fullWidth
              placeholder="email"
              sx={{
                border: "1px solid black",
                borderRadius: "5px",
                padding: "5px",
                height: "50px",
                marginBottom: "10px",
                marginTop: "20px",
                width: "447px",
              }}
            />
            <InputBase
              fullWidth
              type="password"
              placeholder="password"
              sx={{
                border: "1px solid black",
                margin: "auto",
                borderRadius: "5px",
                padding: "5px",
                height: "50px",
                width: "447px",
              }}
              endAdornment={
                <div style={{ color: "blue", cursor: "pointer" }}>show</div>
              }
            />
            <Typography
              sx={{
                color: "#39CDCC",
                width: "147px",
                height: "11px",
                marginTop: "10px",
              }}
            >
              Forgot password
            </Typography>
            <Button
              href="/dashboard"
              fullWidth
              variant="contained"
              sx={{ marginTop: "20px", background: "#39CDCC", height: "48px" }}
            >
              Login
            </Button>
          </Card>
        </Box>
      </Stack>
    </Box>
  );
};

export default Login;
