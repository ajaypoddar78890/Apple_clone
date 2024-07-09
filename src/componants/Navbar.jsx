 import {appleImg, bagImg, searchImg} from "../utils"

const Navbar = () => {
  return (
    <header className="bg-black">
    <nav className="flex items-center justify-between px-4 py-2">
        <img src={appleImg} alt="apple img" width={14} height={18} />

        <div className="flex gap-4 text-white">
            {['iphone', 'Macbook', 'Tablet'].map((navItem) => (
                <div key={navItem}>{navItem}</div>
            ))}
        </div>

        <div className="flex gap-4">
            <img src={searchImg} alt="search img" height={18} width={18} />
            <img src={bagImg} alt="bag img" height={18} width={18} />
        </div>
    </nav>
</header>

  )
}

export default Navbar
