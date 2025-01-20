// react packages
import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"
import{ useState } from "react"

//react icons
import { HiBars2 } from "react-icons/hi2";
import { GoHomeFill } from "react-icons/go";



const Navbar = () => {
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


  const [isOpen, setIsOpen]= useState(true)

  return (
    <>
      <div> 
        <motion.div

          variants={navbar_animation}
          animate={isOpen ? "open" : "closed"}
          className="bg-blue-100 text-black z-[999] w-[480px] max-w-[480px] h-screen overflow-hidden 
          md:relative md:min-w-[480px] fixed"
        >
          {/* Links and Pages */}
          <div className="flex flex-col h-full">
            {/* Home */}
            <ul className="whitespace-pre p-1 text-right flex flex-col gap-1 font-medium mt-[220px]">
              <li>
                <NavLink to="/" className="link"> 
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="link"> 
                Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="link"> 
                Education
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="link"> 
                About
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
 