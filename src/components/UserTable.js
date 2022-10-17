import {
  MoreVert,
  Person,
  PersonRemove,
  Visibility,
} from "@mui/icons-material";
import {
  Button,
  Fade,
  Modal,
  Paper,
  Box,
  Backdrop,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataTable from "./DataTable";
const style = {
  position: "absolute",
  top: "50%",
  left: "90%",
  transform: "translate(-50%, -50%)",
  width: 150,
  height: 100,
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

const userTableStyles = {
  height: "650px",
  padding: "10px",
};

const UserTable = ({ onError, Filters }) => {
  const [userStatus, setUserStatus] = useState("pending");
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);
  const handleClose = () => setOpen(false);
  const [users, setUsers] = useState([]);
  const handleStuff = (id) => {
    setOpen(true);
    setId(id);
  };
  const columns = [
    {
      field: "Oragnization",
      headerName: "ORGANIZATION",
      width: 150,
      renderCell: (params) => (params.row.orgName),
    },
    { field: "email", headerName: "EMAIL", width: 150 },
    { field: "userName", headerName: "USERNAME", width: 150 },
    { field: "phoneNumber", headerName: "PHONE NUMBER", width: 200 },
    {
      field: "Status",
      headerName: "STATUS",
      width: 100,
      renderCell: () =><Button variant="contained">{userStatus}</Button>
    },
    { field: "createdAt", headerName: "DATE JOINED", width: 200 },
    {
      field: null,
      headerName: null,
      width: 100,
      renderCell: (params) => (
        <MoreVert onClick={() => handleStuff(params.row.id)} />
      ),
    },
  ];
  useEffect(() => {
    fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .catch(() => onError());
  }, [onError]);
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  const handleClick = (status) => {
    if (status === "active") {
      setUserStatus("active");
    } else if (status === "blacklist") {
      setUserStatus("blacklist");
    }
  };

  return (
    <Paper sx={{ width: "95%", marginLeft: "22px" }}>
      <DataTable
        rows={users}
        columns={columns}
        loading={!users.length}
        sx={userTableStyles}
        Filters={Filters}
      />
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
              <Visibility sx={{ marginRight: "3px" }} />
              <Link to={`/userDetails/${id}`}>
                <Typography sx={{ fontSize: "14px" }}>View Details</Typography>
              </Link>
            </Box>
            <Box sx={{ display: "flex" }}>
              <PersonRemove sx={{ marginRight: "3px" }} />
              <Typography
                sx={{ fontSize: "14px" }}
                onClick={() => handleClick("blacklist")}
              >
                Blacklist User
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Person sx={{ marginRight: "3px" }} />
              <Typography
                sx={{ fontSize: "14px" }}
                onClick={() => handleClick("active")}
              >
                Activate User
              </Typography>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Paper>
  );
};

export default UserTable;
