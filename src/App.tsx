import Footer from "./components/Footer";
import Header from "./components/Header/header";
import BrandDirectory from "./components/Layout/BrandDirectory";
import CategoryBar from "./components/Layout/CategoryBar";
import ProductScrollSection from "./components/Layout/Products";
import SponsoredSection from "./components/Layout/SponsoredSection";
import Trends from "./components/Layout/Trends";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <Container maxWidth="lg">
        <Header />
        <CategoryBar />
        <Trends />
        <SponsoredSection />
        <ProductScrollSection />
      </Container>
        <BrandDirectory />
        <Footer />
    </>
  );
}

export default App;
