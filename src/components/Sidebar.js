import {
  AccountBox,
  Business,
  CreditScore,
  FavoriteOutlined,
  Home,
  Inventory2,
  KeyboardArrowDown,
  ListAltOutlined,
  ModelTraining,
  Money,
  PaidOutlined,
  People,
  Person,
  ReportOutlined,
  RequestPage,
  Savings,
  Send,
  SwitchCamera,
} from "@mui/icons-material";
import {
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
  ListSubheader,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: "20%",
        background: "#FFFFFF",
        padding: "20px",
        height: "1695px",
        display: { sm: "none", xs: "none", md: "block" },
      }}
    >
      <Box>
        <ListItemButton>
          <ListItemIcon>
            <SwitchCamera />
          </ListItemIcon>
          <ListItemText
            primary="Switch organizations"
            sx={{
              fontSize: "12px",
              color: "#545F7D",
              fontWeight: 400,
              fontFamily: "Work Sans",
            }}
          />
          <ListItemIcon>
            <KeyboardArrowDown sx={{ marginTop: "-13px" }} />
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <Link to="/dashboard">
            <ListItemText
              primary="Dashboard"
              sx={{
                fontSize: "16px",
                color: "#213F7D",
                fontWeight: 400,
                fontFamily: "Work Sans",
              }}
            />
          </Link>
        </ListItemButton>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              sx={{
                fontSize: "12px",
                color: "#545F7D",
                fontWeight: 400,
                fontFamily: "Work Sans",
              }}
            >
              CUSTOMERS
            </ListSubheader>
          }
        >
          <ListItemButton>
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText
              sx={{
                fontSize: "16px",
                color: "#213F7D",
                fontWeight: 400,
                fontFamily: "Work Sans",
              }}
              primary="Users"
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText
              sx={{
                fontSize: "16px",
                color: "#213F7D",
                fontWeight: 400,
                fontFamily: "Work Sans",
              }}
              primary="Guarantors"
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <CreditScore />
            </ListItemIcon>
            <ListItemText
              primary="Loans"
              sx={{
                fontSize: "16px",
                color: "#213F7D",
                fontWeight: 400,
                fontFamily: "Work Sans",
              }}
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ModelTraining />
            </ListItemIcon>
            <ListItemText
              primary="Decision Models"
              sx={{
                fontSize: "16px",
                color: "#213F7D",
                fontWeight: 400,
                fontFamily: "Work Sans",
              }}
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Savings />
            </ListItemIcon>
            <ListItemText
              primary="Savings"
              sx={{
                fontSize: "16px",
                color: "#213F7D",
                fontWeight: 400,
                fontFamily: "Work Sans",
              }}
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <RequestPage />
            </ListItemIcon>
            <ListItemText
              primary="Loan Requests"
              sx={{
                fontSize: "16px",
                color: "#213F7D",
                fontWeight: 400,
                fontFamily: "Work Sans",
              }}
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ListAltOutlined />
            </ListItemIcon>
            <ListItemText
              primary="Whitelist"
              sx={{
                fontSize: "16px",
                color: "#213F7D",
                fontWeight: 400,
                fontFamily: "Work Sans",
              }}
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Send />
            </ListItemIcon>
            <ListItemText
              primary="Karma"
              sx={{
                fontSize: "16px",
                color: "#213F7D",
                fontWeight: 400,
                fontFamily: "Work Sans",
              }}
            />
          </ListItemButton>
        </List>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              sx={{
                fontSize: "12px",
                color: "#545F7D",
                fontWeight: 400,
                fontFamily: "Work Sans",
              }}
            >
              BUSINESSES
            </ListSubheader>
          }
        >
          <ListItemButton>
            <ListItemIcon>
              <Business />
            </ListItemIcon>
            <ListItemText
              primary="organization"
              sx={{
                fontSize: "16px",
                color: "#213F7D",
                fontWeight: 400,
                fontFamily: "Work Sans",
              }}
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Inventory2 />
            </ListItemIcon>
            <ListItemText
              primary="Loan Products"
              sx={{
                fontSize: "16px",
                color: "#213F7D",
                fontWeight: 400,
                fontFamily: "Work Sans",
              }}
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Savings />
            </ListItemIcon>
            <ListItemText
              primary="Savings Products"
              sx={{
                fontSize: "16px",
                color: "#213F7D",
                fontWeight: 400,
                fontFamily: "Work Sans",
              }}
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Money />
            </ListItemIcon>
            <ListItemText
              primary="Fees and Charges"
              sx={{
                fontSize: "16px",
                color: "#213F7D",
                fontWeight: 400,
                fontFamily: "Work Sans",
              }}
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <PaidOutlined />
            </ListItemIcon>
            <ListItemText
              primary="Transactions"
              sx={{
                fontSize: "16px",
                color: "#213F7D",
                fontWeight: 400,
                fontFamily: "Work Sans",
              }}
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <RequestPage />
            </ListItemIcon>
            <ListItemText
              primary="Services"
              sx={{
                fontSize: "16px",
                color: "#213F7D",
                fontWeight: 400,
                fontFamily: "Work Sans",
              }}
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <AccountBox />
            </ListItemIcon>
            <ListItemText
              primary="Service Account"
              sx={{
                fontSize: "16px",
                color: "#213F7D",
                fontWeight: 400,
                fontFamily: "Work Sans",
              }}
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Send />
            </ListItemIcon>
            <ListItemText
              primary="Settlements"
              sx={{
                fontSize: "16px",
                color: "#213F7D",
                fontWeight: 400,
                fontFamily: "Work Sans",
              }}
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ReportOutlined />
            </ListItemIcon>
            <ListItemText
              primary="Reports"
              sx={{
                fontSize: "16px",
                color: "#213F7D",
                fontWeight: 400,
                fontFamily: "Work Sans",
              }}
            />
          </ListItemButton>
        </List>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              SETTINGS
            </ListSubheader>
          }
        >
          <ListItemButton>
            <ListItemIcon>
              <FavoriteOutlined />
            </ListItemIcon>
            <ListItemText
              primary="Preferences"
              sx={{
                fontSize: "16px",
                color: "#213F7D",
                fontWeight: 400,
                fontFamily: "Work Sans",
              }}
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Money />
            </ListItemIcon>
            <ListItemText
              primary="Fees and pricing"
              sx={{
                fontSize: "16px",
                color: "#213F7D",
                fontWeight: 400,
                fontFamily: "Work Sans",
              }}
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <CreditScore />
            </ListItemIcon>
            <ListItemText
              primary="Audit Logs"
              sx={{
                fontSize: "16px",
                color: "#213F7D",
                fontWeight: 400,
                fontFamily: "Work Sans",
              }}
            />
          </ListItemButton>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
