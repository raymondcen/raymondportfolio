// react packages
import { NavLink, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import{ useState, useEffect } from "react"
import { useMediaQuery } from "react-responsive";

//react icons
import { HiBars2 } from "react-icons/hi2";



const Navbar = () => {

  let isTab = useMediaQuery({query: "(max-width: 768px"});
  const {pathname} = useLocation();
  //check if navbar is open
  const [isOpen, setIsOpen]= useState(isTab ? false : true);


  const navbar_animation={
    open:{
      width: "480px",
      transition:{
        damping: 40,
      },
    },
    closed:{
      width: "4rem",
      transition:{
        damping: 40,
      },
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true); // Open sidebar for larger screens
      } else {
        setIsOpen(false); // Collapse sidebar for smaller screens
      }
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Run on initial render to ensure correct state
    handleResize();

    // Cleanup the listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  //hide bar when path changes (phone)
  useEffect(() => {
    isTab && setIsOpen(false);
  }, [pathname])
  
  return (
    <>
      <div> 
        {/* darked background when opening sidebar */}
        <div 
        onClick={()=>setIsOpen(false)}
        className={`${ isOpen ? 'block' : 'hidden'} md:hidden fixed inset-0 max-h-screen z-[998] bg-slate-200`}
        >
        </div>
        {/* animation for sidebar */}
        <motion.div
          variants={navbar_animation}
          animate={isOpen ? "open" : "closed"}
          className="bg-slate-100 text-black z-[999] 
                      md:w-[480px] max-w-[240px]  md:relative md:min-w-[480px] fixed h-screen overflow-hidden"
        >
          {/* Links and Pages */}
          <div className="flex flex-col h-full">
            <ul className="whitespace-pre p-1 text-right gap-[70px] flex flex-col font-medium mt-[220px]">
              <li>
                <NavLink to="/" className="link"> 
                <span
                  className={`transition-opacity transform duration-100 ${
                    isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                >
                  Home
                </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="link"> 
                <span
                  className={`transition-opacity transform duration-100 ${
                    isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                >
                  Projects
                </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="link"> 
                <span
                  className={`transition-opacity transform duration-100 ${
                    isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                >
                  Education
                </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="link"> 
                <span
                  className={`transition-opacity transform duration-100 ${
                    isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                >
                  About
                </span>
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Sidebar Button */}
          <motion.div
              transition={{
                duration: 0, 
              }}
              onClick={() => setIsOpen(!isOpen)}
              className="absolute w-fit h-fit z-50 right-2 top-5 bottom-5 cursor-pointer md:block md:hidden"
          >
            <HiBars2 size={40}/>
          </motion.div>
        </motion.div>
        
      </div>
    </>
  );
}

export default Navbar;
 