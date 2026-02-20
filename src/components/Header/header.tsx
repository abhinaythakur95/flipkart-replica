import {
  Box,
  Typography,
  InputBase,
  Button,
  Container,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Flipkartlogo from '../../assets/Images/Flipkart.png';

const Header = () => {
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
         
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Box sx={{ 
              bgcolor: '#ffdd2d', 
              p: 0.5, 
              borderRadius: 1, 
              px: 2, 
              cursor: 'pointer', 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1 
            }}>
              <img src={Flipkartlogo} alt="Flipkart Logo" style={{ height: 20, objectFit: 'contain' }} />
              <Typography variant="h6" sx={{ fontWeight: 800, fontStyle: 'italic', color: 'black' }}>
                Flipkart
              </Typography>
            </Box>
          </Box>

        
          <Box display="flex" alignItems="center">
            <LocationOnOutlinedIcon sx={{ fontSize: 16, mr: 0.5, color: 'gray' }} />
            <Typography variant="body2" color="gray">
              Location not set
            </Typography>
            <Typography variant="body2" sx={{ color: '#2874f0', ml: 1, cursor: 'pointer', fontWeight: 500 }}>
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
              border: '1px solid blue' // Subtle border
            }}
          >
            <SearchIcon sx={{ color: "gray", mr: 1 }} />
            <InputBase
              placeholder="Search for Products, Brands and More"
              sx={{ color: "black", width: "100%", fontSize: '14px' }}
            />
          </Box>

          {/* Action Buttons */}
          <Stack direction="row" spacing={4} alignItems="center">
            <Button 
              startIcon={<AccountCircleOutlinedIcon />}
              endIcon={<KeyboardArrowDownIcon />}
              sx={{ color: 'black', textTransform: 'none', fontSize: '16px' }}
            >
              Login
            </Button>

            <Stack direction="row" spacing={1} alignItems="center" sx={{ cursor: 'pointer', color: 'black' }}>
                <Typography sx={{ fontSize: '16px' }}>More</Typography>
                <KeyboardArrowDownIcon sx={{ fontSize: 18 }} />
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center" sx={{ cursor: 'pointer', color: 'black' }}>
                <ShoppingCartOutlinedIcon />
                <Typography sx={{ fontSize: '16px' }}>Cart</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;