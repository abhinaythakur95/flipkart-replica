import { useState, useEffect, useRef, useCallback } from "react";
import {
  Box,
  Typography,
  Stack,
  Paper,
  Tooltip,
  CircularProgress,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { products as allProducts } from "../utils/data";

const ProductScrollSection = () => {

  const [displayedItems, setDisplayedItems] = useState(allProducts.slice(0, 8));
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(allProducts.length > 8);

  
  const observerTarget = useRef<HTMLDivElement | null>(null);

 
  const fetchMoreItems = useCallback(() => {
    if (loading || !hasMore) return;

    setLoading(true);

    
    setTimeout(() => {
      setDisplayedItems((prev) => {
        const currentLength = prev.length;
        const nextBatch = allProducts.slice(currentLength, currentLength + 4);
        
        if (currentLength + nextBatch.length >= allProducts.length) {
          setHasMore(false);
        }
        
        return [...prev, ...nextBatch];
      });
      setLoading(false);
    }, 1000);
  }, [loading, hasMore]);

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
       
        if (entries[0].isIntersecting && !loading && hasMore) {
          fetchMoreItems();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: "100px" 
      }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
}, [fetchMoreItems]);

  return (
    <Box sx={{ p: 2, bgcolor: "white", mt: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
        More Products for You
      </Typography>

   
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "flex-start",
        }}
      >
        {displayedItems.map((item) => (
          <Box
            key={item.id}
            sx={{
              width: {
                xs: "calc(50% - 16px)", 
                sm: "calc(33.33% - 16px)", 
                md: "calc(25% - 16px)",
              },
              minWidth: 200,
              cursor: "pointer",
              mb: 3,
              "&:hover": { "& img": { transform: "scale(1.05)" } },
            }}
          >
         
            <Paper
              elevation={0}
              sx={{
                position: "relative",
                border: "1px solid #f0f0f0",
                borderRadius: 2,
                overflow: "hidden",
                height: { xs: 180, md: 250 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 1,
              }}
            >
              <img
                src={item.image}
                alt={item.brand}
                style={{
                  width: "80%",
                  height: "80%",
                  objectFit: "contain",
                  transition: "0.3s ease-in-out",
                }}
              />

          
              <Box
                sx={{
                  position: "absolute",
                  bottom: 8,
                  left: 8,
                  bgcolor: "rgba(255,255,255,0.9)",
                  px: 0.5,
                  borderRadius: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 0.2,
                  border: "1px solid #e0e0e0",
                }}
              >
                <Typography sx={{ fontSize: "11px", fontWeight: 700 }}>
                  {item.rating}
                </Typography>
                <StarIcon sx={{ fontSize: "12px", color: "green" }} />
                <Typography sx={{ fontSize: "10px", color: "gray" }}>
                  | {item.reviewCount}
                </Typography>
              </Box>
            </Paper>

        
            <Stack spacing={0.5}>
              <Tooltip title={item.description} arrow placement="top">
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {item.brand}{" "}
                  <Box component="span" sx={{ fontWeight: 400, color: "#666" }}>
                    {item.description}
                  </Box>
                </Typography>
              </Tooltip>

              <Stack direction="row" spacing={1} alignItems="baseline">
                <Typography sx={{ fontSize: "14px", fontWeight: 700 }}>
                  ₹{item.discountedPrice.toLocaleString()}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "gray",
                    textDecoration: "line-through",
                  }}
                >
                  ₹{item.originalPrice.toLocaleString()}
                </Typography>
              </Stack>
            </Stack>
          </Box>
        ))}
      </Box>

   
      <Box
        ref={observerTarget}
        sx={{
          width: "100%",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 2,
        }}
      >
        {loading && <CircularProgress size={28} sx={{ color: "#2874f0" }} />}
        
      
      </Box>
    </Box>
  );
};

export default ProductScrollSection;