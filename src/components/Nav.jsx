

const Nav = () => {
  return (
    <div className = "flex flex-col half:flex-row">
      <div className="bg-slate-100 h-16 half:h-screen w-full half:w-1/4 p-4 half:p-8 text-left relative">
        <nav className="text-right text-2xl half:text-half"> SideBar</nav>
      </div>

      <div className="p-7"> 
        <h1 className="text-2xl font-semibold">Home Page</h1>
      </div>
    </div>
  )
}

export default Nav