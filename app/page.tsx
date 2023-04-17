import Flexibility from './components/Flexibility'
import Footer from './components/Footer'
import Header from './components/Header'
import LivingCost from './components/LivingCost'
import NewProperty from './components/NewProperty'
import Properties from './components/Properties'
import Slider from './components/Slider'

export default function Home() {
  return (
    <main className="w-full h-screen overflow-x-hidden font-mon bg-colorWhite">
      <Header />
      <LivingCost />
      <Properties />
      <Flexibility />
      <NewProperty />
      <Slider />
      <Footer />
    </main>
  )
}
