
import { Box, Typography } from "@mui/material";
import Fashion from '../../assets/Images/Fashion.jpg';
import Electronics from '../../assets/Images/Electronics.png';
import HomeKitchen from '../../assets/Images/Home&Kitchen.jpg';
import Toys from '../../assets/Images/Toys.jpg';
import GenZTrends from '../../assets/Images/GenzTrends.jpg';
import Mobiles from '../../assets/Images/Mobile.jpg';
import FoodHealth from '../../assets/Images/Food&Health.jpg';
import Appliances from '../../assets/Images/Appliances.jpg';
import Beauty from '../../assets/Images/Beauty.jpg';
import Furniture from '../../assets/Images/Furniture.jpg';
import Sports from '../../assets/Images/Sports.jpg';


const categories = [
  { label: "Fashion", image: Fashion },
  { label: "Electronics", image: Electronics },
  { label: "Home & Kitchen", image: HomeKitchen },
  { label: "Toys, Baby", image: Toys },
  { label: "GenZ Trends", image: GenZTrends },
  { label: "Mobiles", image: Mobiles },
  { label: "Food & Health", image: FoodHealth },
  { label: "Appliances", image: Appliances },
  { label: "Beauty", image: Beauty },
  { label: "Furniture", image: Furniture },
  { label: "Sports", image: Sports },
];

const CategoryBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap", 
        justifyContent: "flex-start", 
        gap: { xs: 1, sm: 2, md: 3 },  
        py: 3,
        px: { xs: 2, md: 5 },        
       
      }}
    >
      {categories.map((category) => (
        <Box
          key={category.label}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
           
            width: { xs: "calc(25% - 8px)", sm: "110px", md: "120px" }, 
            mb: 2, 
            "&:hover": {
              "& img": { transform: "scale(1.1)" },
              color: "#2874f0",
            },
          }}
        >
          
          <Box
            sx={{
              width: { xs: 60, md: 70 },
              height: { xs: 60, md: 70 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 1,
            }}
          >
            <img
              src={category.image}
              alt={category.label}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                transition: "transform 0.3s ease",
              }}
            />
          </Box>

          <Typography
            variant="body2"
            sx={{ 
              fontWeight: 500, 
              fontSize: { xs: "11px", md: "13px" },
              textAlign: "center" 
            }}
          >
            {category.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default CategoryBar;