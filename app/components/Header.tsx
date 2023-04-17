import Navbar from './Navbar'
import Map from '../images/map.jpg'

const Header = () => {
  return (
    <header className="w-full md:flex md:flex-col bg-header bg-cover h-[50rem]">
      <Navbar />
      {/* horizontal line */}
      <div className="w-[70rem] h-1 bg-slate-50 mt-5 w-w80 mx-auto"></div>
      {/* header content */}
      <div className="flex flex-col md:flex gap-8 w-w80 mx-auto">
        {/* text */}
        <h1 className="text-[3rem] text-white mt-11">
          The most affortable place to stay in the san franciso bay area
        </h1>
        {/* map */}
        <div className="">
          <img src={Map} alt="" />
        </div>
      </div>
    </header>
  )
}

export default Header
