import { useState, type MouseEvent } from "react";
import {
  Box,
  Typography,
  InputBase,
  Button,
  Container,
  Stack,
  Popover,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { menuItems, moreMenuItems } from "../utils/data";


const Header = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [moreAnchorEl, setMoreAnchorEl] = useState<HTMLElement | null>(null);

  const handleLoginMouseEnter = (e: MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleMoreMouseEnter = (e: MouseEvent<HTMLElement>) => {
    setMoreAnchorEl(e.currentTarget);
  };

  const handleMoreClose = () => {
    setMoreAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const moreOpen = Boolean(moreAnchorEl);

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1100,
        backgroundColor: "white",
        borderBottom: "1px solid #e0e0e0",
        pb: 1,
      }}
    >
      <Container className="header-container">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          py={1}
        >
          <Box sx={{ display: "flex", gap: 1 }}>
            <Box
              sx={{
                bgcolor: "#ffdd2d",
                p: 0.5,
                borderRadius: 1,
                px: 2,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              {/* <img src={Flipkartlogo} alt="Flipkart Logo" style={{ height: 20, objectFit: 'contain' }} /> */}
              <Typography
                variant="h6"
                sx={{ fontWeight: 800, fontStyle: "italic", color: "black" }}
              >
                Flipkart
              </Typography>
            </Box>
          </Box>

          <Box display="flex" alignItems="center">
            <LocationOnOutlinedIcon sx={{ fontSize: 16, mr: 0.5, color: "gray" }} />
            <Typography variant="body2" color="gray">
              Location not set
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#2874f0", ml: 1, cursor: "pointer", fontWeight: 500 }}
            >
              Select delivery location
            </Typography>
          </Box>
        </Box>

        <Stack direction="row" spacing={4} alignItems="center" sx={{ mt: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 2,
              px: 2,
              flexGrow: 1,
              height: 45,
              border: "1px solid blue",
            }}
          >
            <SearchIcon sx={{ color: "gray", mr: 1 }} />
            <InputBase
              placeholder="Search for Products, Brands and More"
              sx={{ color: "black", width: "100%", fontSize: "14px" }}
            />
          </Box>

          <Stack direction="row" spacing={4} alignItems="center">
          
            <Box
              onMouseEnter={handleLoginMouseEnter}
              onMouseLeave={handlePopoverClose}
              sx={{ position: "relative" }}
            >
              <Button
                startIcon={<AccountCircleOutlinedIcon />}
                endIcon={<KeyboardArrowDownIcon />}
                sx={{ color: "black", textTransform: "none", fontSize: "16px" }}
              >
                Login
              </Button>

              <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                disableRestoreFocus
                slotProps={{
                  paper: {
                    onMouseLeave: handlePopoverClose,
                    sx: {
                      borderRadius: 2,
                      boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
                      minWidth: 240,
                      mt: 0.5,
                    },
                  },
                }}
              >
                
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    px: 2,
                    pt: 2,
                    pb: 1,
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    New customer?
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#2874f0",
                      fontWeight: 600,
                      cursor: "pointer",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Sign Up
                  </Typography>
                </Box>

                <Divider />

                <List dense disablePadding>
                  {menuItems.map((item) => (
                    <ListItemButton
                      key={item.label}
                      sx={{
                        px: 2,
                        py: 0.8,
                        "&:hover": { backgroundColor: "#f5f5f5" },
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: 36, color: "text.primary" }}>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{ fontSize: "14px" }}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Popover>
            </Box>

           
            <Box
              onMouseEnter={handleMoreMouseEnter}
              onMouseLeave={handleMoreClose}
              sx={{ position: "relative" }}
            >
              <Stack
                direction="row"
                spacing={0.5}
                alignItems="center"
                sx={{ cursor: "pointer", color: "black", py: 1 }}
              >
                <Typography sx={{ fontSize: "16px" }}>More</Typography>
                {moreOpen ? (
                  <KeyboardArrowUpIcon sx={{ fontSize: 18 }} />
                ) : (
                  <KeyboardArrowDownIcon sx={{ fontSize: 18 }} />
                )}
              </Stack>

              <Popover
                open={moreOpen}
                anchorEl={moreAnchorEl}
                onClose={handleMoreClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                disableRestoreFocus
                slotProps={{
                  paper: {
                    onMouseLeave: handleMoreClose,
                    sx: {
                      borderRadius: 2,
                      boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
                      minWidth: 240,
                      mt: 0.5,
                    },
                  },
                }}
                
              >
                <Typography
                  sx={{ px: 2, pt: 2, pb: 1, fontWeight: 700, fontSize: "15px" }}
                >
                  More
                </Typography>
                <List dense disablePadding sx={{ pb: 1 }}>
                  {moreMenuItems.map((item) => (
                    <ListItemButton
                      key={item.label}
                      sx={{
                        px: 2,
                        py: 1,
                        "&:hover": { backgroundColor: "#f5f5f5" },
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: 36, color: "text.primary" }}>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{ fontSize: "14px" }}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Popover>
            </Box>

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{ cursor: "pointer", color: "black" }}
            >
              <ShoppingCartOutlinedIcon />
              <Typography sx={{ fontSize: "16px" }}>Cart</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;