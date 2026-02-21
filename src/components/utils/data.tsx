import Electronics from '../../assets/Images/Electronics.png';
import HomeKitchen from '../../assets/Images/Home&Kitchen.jpg';
import Toys from '../../assets/Images/Toys.jpg';
import GenZTrends from '../../assets/Images/GenzTrends.jpg';
import Mobiles from '../../assets/Images/Mobile.jpg';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import RedeemOutlinedIcon from "@mui/icons-material/RedeemOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";


interface ProductItem {
  id: number;
  image: string;
  rating: number;
  reviewCount: string;
  brand: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
}

interface SponsoredProduct {
  id: number;
  image: string;
  title: string;     
  description: string; 
}


export const products: ProductItem[] = [

  {
    id: 1,
    image: Electronics,
    rating: 4.2,
    reviewCount: "(1,25,350)",
    brand: "boAt",
    description:
      "Nirvana Ion ANC Pro with Active Noise Cancellation, 40H Playtime, Bluetooth 5.3",
    originalPrice: 13990,
    discountedPrice: 2399,
  },
  {
    id: 2,
    image: Mobiles,
    rating: 4.1,
    reviewCount: "(85,210)",
    brand: "Noise",
    description:
      "ColorFit Pro 5 Smart Watch with AMOLED Display, 100+ Sports Modes",
    originalPrice: 7999,
    discountedPrice: 3499,
  },
  {
    id: 3,
    image: Mobiles,
    rating: 4.3,
    reviewCount: "(2,10,452)",
    brand: "Samsung",
    description:
      "Galaxy M14 5G (6GB RAM, 128GB Storage), 6000mAh Battery",
    originalPrice: 18999,
    discountedPrice: 13499,
  },
  {
    id: 4,
    image: Electronics,
    rating: 4.0,
    reviewCount: "(74,112)",
    brand: "Realme",
    description:
      "Buds Wireless 3 with ANC, 30H Playback, Fast Charging",
    originalPrice: 6999,
    discountedPrice: 1999,
  },
  {
    id: 5,
    image: Electronics,
    rating: 4.4,
    reviewCount: "(12,540)",
    brand: "HP",
    description:
      "15s Ryzen 5 Laptop, 16GB RAM, 512GB SSD, Windows 11",
    originalPrice: 58999,
    discountedPrice: 44999,
  },
  {
    id: 6,
    image: HomeKitchen,
    rating: 4.5,
    reviewCount: "(54,320)",
    brand: "Logitech",
    description:
      "Wireless Mouse M331 Silent Plus with 2.4GHz Nano Receiver",
    originalPrice: 1499,
    discountedPrice: 899,
  },
  {
    id: 7,
    image: GenZTrends,
    rating: 4.3,
    reviewCount: "(3,45,210)",
    brand: "Mi",
    description:
      "10000mAh Power Bank 22.5W Fast Charging, Dual Output",
    originalPrice: 1999,
    discountedPrice: 1099,
  },
  {
    id: 8,
    image: Electronics,
    rating: 4.6,
    reviewCount: "(18,902)",
    brand: "Sony",
    description:
      "Portable Bluetooth Speaker with Extra Bass and IP67 Rating",
    originalPrice: 9990,
    discountedPrice: 7490,
  },

 
  {
    id: 9,
    image: GenZTrends,
    rating: 4.4,
    reviewCount: "(8,320)",
    brand: "LG",
    description:
      "260L Double Door Refrigerator with Smart Inverter Compressor",
    originalPrice: 34999,
    discountedPrice: 27999,
  },
  {
    id: 10,
    image: Toys,
    rating: 4.2,
    reviewCount: "(25,780)",
    brand: "Philips",
    description:
      "750W Mixer Grinder with 3 Stainless Steel Jars",
    originalPrice: 5495,
    discountedPrice: 3799,
  },
  {
    id: 11,
    image: Toys,
    rating: 4.3,
    reviewCount: "(1,02,450)",
    brand: "Prestige",
    description:
      "5L Aluminium Pressure Cooker with Induction Base",
    originalPrice: 2499,
    discountedPrice: 1599,
  },
  {
    id: 12,
    image:  HomeKitchen,
    rating: 4.7,
    reviewCount: "(4,210)",
    brand: "Dyson",
    description:
      "V8 Absolute Cord-Free Vacuum Cleaner",
    originalPrice: 45900,
    discountedPrice: 38900,
  },
  {
    id: 13,
    image: HomeKitchen,
    rating: 4.4,
    reviewCount: "(6,740)",
    brand: "IFB",
    description:
      "6.5kg Fully Automatic Front Load Washing Machine",
    originalPrice: 33990,
    discountedPrice: 28990,
  },
  {
    id: 14,
    image: Toys,
    rating: 4.1,
    reviewCount: "(12,345)",
    brand: "Havells",
    description:
      "1200W Steam Iron with Non-Stick Soleplate",
    originalPrice: 1999,
    discountedPrice: 1199,
  },
  {
    id: 15,
    image: HomeKitchen,
    rating: 4.2,
    reviewCount: "(21,560)",
    brand: "Usha",
    description:
      "Ceiling Fan 1200mm with High Air Delivery",
    originalPrice: 3499,
    discountedPrice: 2299,
  },

  
  {
    id: 16,
    image:  GenZTrends,
    rating: 4.5,
    reviewCount: "(3,10,000)",
    brand: "Surf Excel",
    description:
      "Matic Front Load Liquid Detergent 2L",
    originalPrice: 480,
    discountedPrice: 399,
  },
  {
    id: 17,
    image: HomeKitchen,
    rating: 4.6,
    reviewCount: "(1,45,000)",
    brand: "Tata",
    description:
      "Tata Salt Iodized, 1kg",
    originalPrice: 28,
    discountedPrice: 26,
  },
  {
    id: 18,
    image: GenZTrends,
    rating: 4.4,
    reviewCount: "(90,340)",
    brand: "Colgate",
    description:
      "Strong Teeth Toothpaste 500g",
    originalPrice: 299,
    discountedPrice: 249,
  },
  {
    id: 19,
    image: GenZTrends,
    rating: 4.3,
    reviewCount: "(56,210)",
    brand: "Fortune",
    description:
      "Sunflower Refined Oil 1L",
    originalPrice: 190,
    discountedPrice: 165,
  },
  {
    id: 20,
    image: GenZTrends,
    rating: 4.5,
    reviewCount: "(2,20,450)",
    brand: "Aashirvaad",
    description:
      "Whole Wheat Atta 5kg",
    originalPrice: 299,
    discountedPrice: 269,
  },


  {
    id: 21,
    image: Electronics,
    rating: 4.7,
    reviewCount: "(1,12,890)",
    brand: "Apple",
    description:
      "AirPods 3rd Gen with Spatial Audio",
    originalPrice: 20900,
    discountedPrice: 17999,
  },
  {
    id: 22,
    image: Electronics,
    rating: 4.4,
    reviewCount: "(15,220)",
    brand: "OnePlus",
    description:
      "43 inch 4K Ultra HD Smart LED TV",
    originalPrice: 29999,
    discountedPrice: 24999,
  },
  {
    id: 23,
    image: Electronics,
    rating: 4.6,
    reviewCount: "(28,430)",
    brand: "SanDisk",
    description:
      "1TB Portable SSD USB 3.2",
    originalPrice: 11999,
    discountedPrice: 8999,
  },

  
  {
    id: 24,
    image: Electronics,
    rating: 4.3,
    reviewCount: "(9,320)",
    brand: "Voltas",
    description:
      "1.5 Ton 3 Star Inverter Split AC",
    originalPrice: 42999,
    discountedPrice: 35999,
  },
  {
    id: 25,
    image: GenZTrends,
    rating: 4.1,
    reviewCount: "(4,540)",
    brand: "Bajaj",
    description:
      "Room Heater 2000W with Adjustable Thermostat",
    originalPrice: 2499,
    discountedPrice: 1799,
  },

  
  {
    id: 26,
    image: HomeKitchen,
    rating: 4.6,
    reviewCount: "(1,78,300)",
    brand: "Dove",
    description:
      "Cream Beauty Bathing Bar (Pack of 4)",
    originalPrice: 240,
    discountedPrice: 199,
  },
  {
    id: 27,
    image: HomeKitchen,
    rating: 4.4,
    reviewCount: "(1,05,210)",
    brand: "Vim",
    description:
      "Dishwash Liquid Gel 750ml",
    originalPrice: 210,
    discountedPrice: 179,
  },
  {
    id: 28,
    image: HomeKitchen,
    rating: 4.8,
    reviewCount: "(3,50,000)",
    brand: "Maggi",
    description:
      "2-Minute Masala Noodles Pack of 12",
    originalPrice: 168,
    discountedPrice: 150,
  },
  {
    id: 29,
    image: HomeKitchen,
    rating: 4.5,
    reviewCount: "(60,430)",
    brand: "Bisleri",
    description:
      "Mineral Water 1L Pack of 12",
    originalPrice: 240,
    discountedPrice: 210,
  },
  {
    id: 30,
    image: HomeKitchen,
    rating: 4.7,
    reviewCount: "(2,80,000)",
    brand: "Parle",
    description:
      "Parle-G Original Glucose Biscuits 800g",
    originalPrice: 110,
    discountedPrice: 95,
  },

  
  {
    id: 31,
    image: Electronics,
    rating: 4.3,
    reviewCount: "(35,780)",
    brand: "Mi",
    description:
      "TV Stick with Android TV and Built-in Chromecast",
    originalPrice: 3999,
    discountedPrice: 2999,
  },
  {
    id: 32,
    image: Electronics,
    rating: 4.2,
    reviewCount: "(11,210)",
    brand: "Canon",
    description:
      "Ink Efficient WiFi Color Printer",
    originalPrice: 8999,
    discountedPrice: 6999,
  },
  {
    id: 33,
    image: HomeKitchen,
    rating: 4.5,
    reviewCount: "(44,120)",
    brand: "Milton",
    description:
      "1L Stainless Steel Water Bottle",
    originalPrice: 799,
    discountedPrice: 499,
  },
  {
    id: 34,
    image: HomeKitchen,
    rating: 4.1,
    reviewCount: "(18,900)",
    brand: "Pigeon",
    description:
      "1.5L Electric Kettle 1500W",
    originalPrice: 1295,
    discountedPrice: 899,
  },
  {
    id: 35,
    image: HomeKitchen,
    rating: 4.6,
    reviewCount: "(72,450)",
    brand: "Nescafe",
    description:
      "Classic Instant Coffee 200g",
    originalPrice: 550,
    discountedPrice: 499,
  },
];


export const footerData = [
  {
    title: "ABOUT",
    links: ["Contact Us", "About Us", "Careers", "Flipkart Stories", "Press", "Corporate Information"]
  },
  {
    title: "GROUP COMPANIES",
    links: ["Myntra", "Cleartrip", "Shopsy"]
  },
  {
    title: "HELP",
    links: ["Payments", "Shipping", "Cancellation & Returns", "FAQ"]
  },
  {
    title: "CONSUMER POLICY",
    links: ["Cancellation & Returns", "Terms Of Use", "Security", "Privacy", "Sitemap", "Grievance Redressal", "EPR Compliance", "FSSAI Food Safety Connect App"]
  }
];


export const directoryData = [
  {
    category: "MOST SEARCHED FOR ON FLIPKART",
    links: ["Eid Sale", "OPPO K14x 5G", "Lumio Projectors", "5G Mobiles", "Motorola Signature", "Bags for Men", "Laptop Store", "Mixer Juicer Grinder", "Men's Shoes", "Adidas Men's Shoes", "Boat Earbuds", "Body Lotion", "Campus Shoes", "Earphones", "Red Tape Shoes", "Men's Slippers", "Helmets", "Nike Shoes", "Puma Shoes", "Trimmers"]
  },
  {
    category: "MOBILES",
    links: ["4G Mobiles", "Nokia Phones", "Samsung Mobiles", "Oppo Mobiles", "Apple Phones", "Realme Mobiles", "Nothing Phones", "OnePlus Mobiles", "Blackberry Phones", "POCO Mobiles", "Feature Mobile Phones", "Redmi Phones"]
  },
  {
    category: "CAMERA",
    links: ["Akaso Action Camera", "Nikon Cameras", "Canon Cameras", "Sony Cameras", "Instant Cameras", "DSLR Mirrorless Cameras", "GoPro Cameras", "Insta360 Cameras", "Drones", "Sports Action Cameras"]
  },
  {
    category: "LAPTOPS",
    links: ["Apple Laptops", "Acer Laptops", "Lenovo Laptops", "Gaming Laptops", "Dell Laptops", "Asus Laptops", "HP Laptops", "Samsung Laptops"]
  },
  {
    category: "TVs",
    links: ["LG TVs", "Sony TVs", "Samsung TVs", "Mi TVs", "LED TVs", "OLED TVs", "Smart TVs", "Android TVs", "4K TVs"]
  }
];




export const sponsoredData: SponsoredProduct[] = [
  { 
    id: 1, 
    image: Electronics,
    title: "Launch 23rd Feb", 
    description: "21 day battery*" 
  },
  { 
    id: 2, 
    image: HomeKitchen,
    title: "From ₹999", 
    description: "Limited time deal" 
  },
  { 
    id: 3, 
    image: Toys,
    title: "From ₹999", 
    description: "Track your fitness" 
  },
  
  { 
    id: 4, 
    image: GenZTrends,
    title: "Top Offers", 
    description: "Shop Now" 
  },
];


export const menuItems = [
  { label: "My Profile", icon: <AccountCircleIcon fontSize="small" /> },
  { label: "Flipkart Plus Zone", icon: <StarBorderIcon fontSize="small" /> },
  { label: "Orders", icon: <Inventory2OutlinedIcon fontSize="small" /> },
  { label: "Wishlist", icon: <FavoriteBorderIcon fontSize="small" /> },
  { label: "Become a Seller", icon: <StorefrontOutlinedIcon fontSize="small" /> },
  { label: "Rewards", icon: <RedeemOutlinedIcon fontSize="small" /> },
  { label: "Gift Cards", icon: <CardGiftcardOutlinedIcon fontSize="small" /> },
  { label: "Notification Preferences", icon: <NotificationsNoneOutlinedIcon fontSize="small" /> },
  { label: "24x7 Customer Care", icon: <HeadsetMicOutlinedIcon fontSize="small" /> },
  { label: "Advertise", icon: <CampaignOutlinedIcon fontSize="small" /> },
  { label: "Download App", icon: <PhoneAndroidOutlinedIcon fontSize="small" /> },
];

export const moreMenuItems = [
  { label: "Become a Seller", icon: <StorefrontOutlinedIcon fontSize="small" /> },
  { label: "Notification Settings", icon: <NotificationsNoneOutlinedIcon fontSize="small" /> },
  { label: "24x7 Customer Care", icon: <HeadsetMicOutlinedIcon fontSize="small" /> },
  { label: "Advertise on Flipkart", icon: <CampaignOutlinedIcon fontSize="small" /> },
];
