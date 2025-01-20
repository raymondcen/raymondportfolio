import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { GoDotFill } from "react-icons/go";
import { HiBars2 } from "react-icons/hi2";

const Navbar = () => {
  let isTab = useMediaQuery({ query: "(max-width: 768px" });
  const { pathname } = useLocation();

  //check if navbar is open
  const [isOpen, setIsOpen] = useState(isTab ? false : true);

  //track link
  const [activeLink, setActiveLink] = useState("/");

  const navbar_animation = {
    open: {
      width: "480px",
      transition: {
        damping: 40,
      },
    },
    closed: {
      width: "4rem",
      transition: {
        damping: 40,
      },
    },
  };


  //collapse on phone, expand on desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true); 
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Run on initial render to ensure correct state
    handleResize();

    // Cleanup the listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //hide bar when path changes (phone only)
  useEffect(() => {
    isTab && setIsOpen(false);
  }, [pathname]);



  return (
    <>
      <div>
        {/* darkened background when opening sidebar */}
        <div
          onClick={() => setIsOpen(false)}
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden fixed inset-0 max-h-screen z-[998] bg-black/40`}
        ></div>

        {/* animation for sidebar */}
        <motion.div
          variants={navbar_animation}
          animate={isOpen ? "open" : "closed"}
          className={`${ isOpen && isTab ? "bg-gray-100 shadow-2xl overflow-y-auto" : "bg-transparent"} 
                         text-black z-[999] md:bg-transparent md:w-[480px] max-w-[240px]  
                         md:relative md:min-w-[480px] fixed h-screen `}
        >
          {/* links */}
          <div className="flex flex-col ">
            <ul className="whitespace-pre p-1 md:fixed text-right gap-[70px] flex flex-col font-medium my-[24vh] mr-[15px] md:left-[15vw]">
              {[
                { path: "/", name: "Home" },
                { path: "/projects", name: "Projects" },
                { path: "/education", name: "Education" },
                { path: "/about", name: "About" },
              ].map((link) => (

                <li key={link.path}>
                  <NavLink
                    to={link.path} 
                    className={`link ${activeLink === link.path ? "pointer-events-none md:duration-0" : ""}`}
                    onClick={() => setActiveLink(link.path)}
                  >
                    <span
                      //mobile transition
                      className={`transition-opacity transform duration-100 
                       ${ isOpen ? "opacity-100 scale-100 " : "opacity-0 scale-95" }`}
                    >

                     <span
                      //fade in text transition
                      className={` duration-100 ${ activeLink ===link.path ? "opacity-0 scale-100 " : "opacity-100 scale-100" }`}
                    >
                      {link.name}

                    </span>                   
                        <GoDotFill
                          size={20}
                          className={`absolute inline transition-opacity duration-300 ease-out translate-y-[12px] right-[25px] md:right-[10px] ${
                            activeLink === link.path ? "opacity-100 scale-150" : "opacity-0 scale-150"
                          }`}
                        />
                    </span>

                  </NavLink>
                </li>
                
              ))}
            </ul>
          </div>

          {/* Sidebar Button */}
          <motion.div
            transition={{
              duration: 0,
            }}
            onClick={() => setIsOpen(!isOpen)}
            className={`absolute w-fit h-fit z-50 right-2 top-5 bottom-5 cursor-pointer md:block md:hidden 
              ${ isOpen ? "hidden" : "" }`}
          >
            <HiBars2 size={40} />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Navbar;
