const Home = () => {
  return ( 
    // greenbox
    <div className="inset-x-0 top-0 absolute bg-emerald-100 h-[600px]
                    mx-[10vw] mt-[58vh] "
    >
     
          <div className="md:ml-[340px] md:mr-[10vw] md:mt-[80px]"> 
            <span>
              Welcome to the Home Page AA A A A AA A A A  A A A AA A A A  
              AA A A HH H H H HH H H H HH HHH H H H HH H HH H a a aa a a a 
              aa a a aa a a a aa a aaaa a aa a a a aa a a aa a a a aa a a aa  
              a a a a a! 
            </span>
          </div>

        <div className="inset-x-0 top-0 absolute bg-red-200 h-[550px]  md:ml-[340px] md:mr-[10vw] -mt-[500px]"
        >
          <span>Raymond Cen</span>
          <span> is a student at </span>
          <span>Oregon </span> <span>State </span> <span>University</span>
          <img className="transform scale-x-[2] scale-y-[3] translate-x-[740px] translate-y-[200px]" 
              src="./public/images/temp-image.webp" alt="profile-image"></img>

            {/* <img className="transform scale-[2] translate-x-[740px] translate-y-[20px]" 
            src="./public/images/temp-image.webp" alt="profile-image"></img> */}
        </div>
       
    </div>
  );
};

export default Home;
