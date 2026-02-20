import { Box, Container, Typography, Link, Stack, Divider } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import StorefrontIcon from '@mui/icons-material/Storefront';
import StarsIcon from '@mui/icons-material/Stars';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { footerData } from "../utils/data";




const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#212121", color: "white" }}>
      <Container maxWidth="xl" sx={{ py: 6 }}>
       
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 4 }}>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: { xs: 4, md: 8 }, flex: 2 }}>
            {footerData.map((section) => (
              <Box key={section.title} sx={{ minWidth: "120px" }}>
                <Typography variant="caption" sx={{ color: "#878787", mb: 2, display: "block" }}>
                  {section.title}
                </Typography>
                <Stack spacing={0.5}>
                  {section.links.map((link) => (
                    <Link key={link} href="#" underline="none" sx={{ color: "white", fontSize: "12px", fontWeight: 700, "&:hover": { color: "#2874f0" } }}>
                      {link}
                    </Link>
                  ))}
                </Stack>
              </Box>
            ))}
          </Box>

          <Divider orientation="vertical" flexItem sx={{ bgcolor: "#454d5e", display: { xs: 'none', md: 'block' }, mx: 2 }} />

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, flex: 1.5 }}>
            <Box sx={{ flex: 1, minWidth: "200px" }}>
              <Typography variant="caption" sx={{ color: "#878787", mb: 1, display: "block" }}>Mail Us:</Typography>
              <Typography sx={{ fontSize: "12px", lineHeight: 1.5 }}>
                Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village, Bengaluru, 560103, Karnataka, India
              </Typography>
              <Typography variant="caption" sx={{ color: "#878787", mt: 3, mb: 1, display: "block" }}>Social:</Typography>
              <Stack direction="row" spacing={2}>
                <FacebookIcon sx={{ fontSize: 20, cursor: 'pointer' }} />
                <XIcon sx={{ fontSize: 20, cursor: 'pointer' }} />
                <YouTubeIcon sx={{ fontSize: 20, cursor: 'pointer' }} />
                <InstagramIcon sx={{ fontSize: 20, cursor: 'pointer' }} />
              </Stack>
            </Box>

            <Box sx={{ flex: 1, minWidth: "250px" }}>
              <Typography variant="caption" sx={{ color: "#878787", mb: 1, display: "block" }}>Registered Office Address:</Typography>
              <Typography sx={{ fontSize: "12px", lineHeight: 1.5 }}>
                Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village, Bengaluru, 560103, Karnataka, India<br />
                CIN : U51109KA2012PTC066107<br />
                Telephone: <Link href="#" sx={{ color: "#2874f0", textDecoration: 'none' }}>044-45614700</Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>

      
      <Box sx={{ borderTop: "1px solid #454d5e", py: 3, pb: 4 }}>
        <Container maxWidth="xl">
          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 2 }}>
            
            
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: { xs: 2, md: 5 } }}>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ cursor: 'pointer' }}>
                <StorefrontIcon sx={{ color: "#ffc200", fontSize: 18 }} />
                <Typography sx={{ fontSize: "14px" }}>Become a Seller</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ cursor: 'pointer' }}>
                <StarsIcon sx={{ color: "#ffc200", fontSize: 18 }} />
                <Typography sx={{ fontSize: "14px" }}>Advertise</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ cursor: 'pointer' }}>
                <CardGiftcardIcon sx={{ color: "#ffc200", fontSize: 18 }} />
                <Typography sx={{ fontSize: "14px" }}>Gift Cards</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ cursor: 'pointer' }}>
                <HelpOutlineIcon sx={{ color: "#ffc200", fontSize: 18 }} />
                <Typography sx={{ fontSize: "14px" }}>Help Center</Typography>
              </Stack>
            </Box>

            
            <Typography sx={{ fontSize: "14px" }}>
              © 2007-2026 Flipkart.com
            </Typography>

            

          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;