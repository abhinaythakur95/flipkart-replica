import { Box, Container, Typography, Link, Stack } from "@mui/material";
import { directoryData } from "../utils/data";



const BrandDirectory = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        backgroundColor: "#f1f3f6", 
        borderTop: "1px solid #ddd",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h6"
          sx={{
            fontSize: "16px",
            fontWeight: 700,
            color: "#555",
            mb: 2,
          }}
        >
          Top Stories : Brand Directory
        </Typography>

        <Stack spacing={2}>
          {directoryData.map((item) => (
            <Box key={item.category} sx={{ lineHeight: 1.8 }}>
              <Typography
                component="span"
                sx={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#878787", 
                  mr: 1,
                }}
              >
                {item.category}:
              </Typography>
              
              {item.links.map((link, index) => (
                <Typography
                  key={link}
                  component="span"
                  sx={{ fontSize: "12px", color: "#555" }}
                >
                  <Link
                    href="#"
                    underline="none"
                    sx={{
                      color: "inherit",
                      "&:hover": { color: "#2874f0", textDecoration: "underline" },
                    }}
                  >
                    {link}
                  </Link>
                 
                  {index < item.links.length - 1 && (
                    <Box component="span" sx={{ mx: 0.8, color: "#ccc" }}>
                      |
                    </Box>
                  )}
                </Typography>
              ))}
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default BrandDirectory;