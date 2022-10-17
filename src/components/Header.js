import {
  ArrowDropDown,
  Logout,
  NotificationsOutlined,
  Search,
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Backdrop,
  Box,
  Fade,
  InputBase,
  Modal,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const style = {
    position: "absolute",
    top: "10%",
    right: 0,
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    padding: "10px",
  };
  const Image = styled("img")({});
  return (
    <Box>
      <AppBar sx={{ height: "100px", background: "#fff" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justofyContent: "space-between",
              alignItems: "center",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            <Image
              sx={{ width: "24.75px", height: "25px", marginRight: "6px" }}
              src={process.env.PUBLIC_URL + "/images/Union.png"}
            />
            <Image
              sx={{ width: {lg:"115px",md:"115px",xs:"70px"}, height: "30px", marginTop: "6px" }}
              src={process.env.PUBLIC_URL + "/images/lendsqr.png"}
            />
            <InputBase
              sx={{
                borderRadius: "8px",
                height: "40px",
                border: "1px solid #213F7D",
                width: "400px",
                marginLeft: "70px",
                opacity: "70%",
                padding: "5px",
                display: { xs: "none", sm: "none", md: "flex" },
              }}
              endAdornment={
                <Search
                  sx={{
                    background: "#39CDCC",
                    height: "39px",
                    width: "56px",
                    color: "#FFFFFF",
                    marginRight: "-5.9px",
                    borderTopRightRadius: "6px",
                    marginTop: "-1.9px",
                    border: "2px solid #39CDCC",
                  }}
                />
              }
              placeholder="search for anything"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "space-between",
              color: "black",
              gap: 3,
              marginTop:'15px',
              marginRight:{lg:'17px',xs:'40px'},
            }}
          >
            <Typography
              sx={{
                cursor: "pointer",
                textDecoration: "underline",
                fontWeight: 400,
                fontSize: "16px",
              }}
            >
              Docs
            </Typography>
            <NotificationsOutlined
              sx={{ color: "#213F7D", height: "32.74px", width: "19.5px" }}
            />
            <Box sx={{display: "flex", alignItems: "center" }}>
              <Avatar src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
              <Typography sx={{ marginTop: "8px", cursor: "pointer" }}>
                Adedeji
              </Typography>
              <ArrowDropDown
                onClick={handleOpen}
                sx={{ marginTop: "6px", cursor: "pointer" }}
              />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box sx={{ display: "flex" }}>
              <Logout sx={{ marginRight: "3px" }} />
              <Link to={`/`}>
                <Typography sx={{ fontSize: "14px", marginTop: "2px" }}>
                  Logout
                </Typography>
              </Link>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default Header;
