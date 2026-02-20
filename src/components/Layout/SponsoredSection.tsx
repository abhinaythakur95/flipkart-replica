import { Box, Typography, Stack } from "@mui/material";
import { sponsoredData } from "../utils/data";

const SponsoredSection = () => {
  return (
    <>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column", 
        alignContent: "center", 
        justifyContent: "space-evenly",
        alignItems: "center",
        gap: { xs: 1, sm: 2, md: 3 },  
        py: 3,
        px: { xs: 2, md: 5 },        
       
      }}
    >
      
      <Typography 
        variant="h6" 
        sx={{ 
          fontWeight: 700, 
          mb: 2, 
          fontSize: '20px', 
          color: '#212121', 
          marginRight:'60%'
        }}
      >
        Sponsored
      </Typography>

      <Box 
        sx={{ 
          display: 'flex', 
          gap: 3, 
          overflowX: 'auto',
          pb: 2,
          '&::-webkit-scrollbar': {
            height: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#e0e0e0',
            borderRadius: '10px',
          }
        }}
      >
        {sponsoredData.map((product) => (
          <Stack 
            key={product.id} 
            spacing={1.5} 
            sx={{ 
              minWidth: { xs: 160, sm: 200, md: 230 }, 
              cursor: 'pointer',
             
              '&:hover img': { 
                transform: 'scale(1.04)',
              } 
            }}
          >
            
            <Box
              sx={{
                width: '100%',
                aspectRatio: '1/1',
                borderRadius: 4, 
                overflow: 'hidden',
                backgroundColor: '#F7F7F7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}
              />
            </Box>

            
            <Box sx={{ textAlign: 'center' }}>
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  fontWeight: 800, 
                  color: '#000', 
                  fontSize: '16px',
                  lineHeight: 1.2
                }}
              >
                {product.title}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: '#616161', 
                  fontSize: '14px',
                  fontWeight: 400
                }}
              >
                {product.description}
              </Typography>
            </Box>
          </Stack>
        ))}
      </Box>
      </Box>
    </>
  );
};

export default SponsoredSection;