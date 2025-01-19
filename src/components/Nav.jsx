
const Nav = () => {
  return (
    <>
      <div className="flex flex-col half:flex-row bg-slate-100 h-16 relative w-full p-4 half:h-screen half:w-1/4 ">
        <div className="flex flex-row space-x-10 justify-center items-center half:justify-normal half:items-end half:flex-col half:space-y-20 half:w-full half:mt-[220px]">
          <a href="#" className="text-black text-xl half:text-2xl half:text-right">Home</a>
          <a href="#" className="text-black text-xl half:text-2xl half:text-right">Projects</a>
          <a href="#" className="text-black text-xl half:text-2xl half:text-right">Education</a>
          <a href="#" className="text-black text-xl half:text-2xl half:text-right">About</a>
        </div>
      </div>
    </>
  );
};

export default Nav;
