import Header from './components/Header/header'
import CategoryBar from './components/Layout/CategoryBar'
import SponsoredSection from './components/Layout/SponsoredSection'
import Trends from './components/Layout/Trends'
import { Container } from '@mui/material'

function App() {
  

  return (
   <> 
  <Container maxWidth="lg">
    <Header />
    <CategoryBar />
    <Trends />
   </Container>
   <SponsoredSection />
    </>
  )
}

export default App
