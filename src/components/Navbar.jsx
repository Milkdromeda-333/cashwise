import { useState } from "react";
// icons
import { PiShoppingBagThin } from "react-icons/pi";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

export default function Navbar() {

    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
      <nav className={`
        flex flex-row justify-between items-center
        p-4 h-16 w-full
        absolute left-0 top-0
        transition-all duration-500
        ${isMobileNavOpen ? "bg-white" : "bg-brand-creme"}
        lg:px-14 lg:py-4
    `}>
          <span className="font-brand text-brand-mint text-3xl ">
              CashWise
          </span>
          
              <ul className={`
                transition-all duration-700
                flex flex-col gap-4 justify-center
                absolute left-0 ${isMobileNavOpen ? "top-full" : "top-[-100vh] opacity-0"}
                w-full h-[calc(100vh-64px)] px-4 bg-white
                lg:static lg:w-auto lg:opacity-100 lg:flex-row lg:h-auto lg:bg-transparent
            `}>
                <li>Home</li>
                <li>About</li>
                <li>Features</li>
                <li>Success Stories</li>
                <li>Pricing</li>
                <li>Contact</li>
            </ul>

          <div className="
          flex flex-row gap-2 justify-center items-center
          ">
              <PiShoppingBagThin className="text-3xl inline-block" />

              <span className="w-[1px] h-3/4 bg-zinc-300"></span>

              <a href="/login">Log in</a>

              {/* md screens and up only! */}
              <a href="/signup" className="hidden md:block bg-brand-mint text-white rounded-full px-2 py-1">Sign up</a>
            
              {/* small screens only! */}
              {isMobileNavOpen ?
                  <RxCross1 
                  className="text-2xl lg:hidden" 
                  onClick={()=>setIsMobileNavOpen(prev=>!prev)} 
                  />
                  : <RxHamburgerMenu 
                    className="text-2xl lg:hidden" 
                    onClick={()=>setIsMobileNavOpen(prev=>!prev)} 
                    />
              }
          </div>
    </nav>
  )
}