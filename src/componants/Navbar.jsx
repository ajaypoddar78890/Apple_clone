 import {appleImg, bagImg, searchImg} from "../utils"

const Navbar = () => {
  return (
    <header className="bg-black mt-2">
    <nav className="flex items-center justify-between md:px-4 md:py-2">
        {/* <img src={appleImg} alt="apple img" width={30} height={24} /> */}
        <img src={appleImg} alt="apple img" className="w-6 md:w-15   h-auto" />


        <div className="hidden md:flex md:gap-10 text-gray-400">
  {['iphone', 'Macbook', 'Tablet'].map((navItem) => (
    <div className="hover:text-white md:text-xl" key={navItem}>{navItem}</div>
  ))}
</div>


        <div className="flex gap-5 md:gap-6">
            <img src={searchImg} alt="search img" className="w-6 md:w-15   h-auto" />
            <img src={bagImg} alt="bag img" className="w-6 md:w-15   h-auto" />
        </div>
    </nav>
</header>

  )
}

export default Navbar
