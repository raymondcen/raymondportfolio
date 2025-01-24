const Home = () => {
  return ( 
    
    <div>
      {/* greenbox */}
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
      </div>

      <div className="flex-wrap inset-x-0 top-0 absolute bg-transparent h-[550px]  md:ml-[32vw] md:mr-[20vw] mt-[87px]"
      >
        <div className="text-neutral-500 bg-transparent md:text-[2.5rem] 2xl:text-[3rem] md:mt-[10px] xl:mt-[170px] ml-[5vw] mr-[300px] absolute">
          <span className="font-[650] text-neutral-950">Raymond Cen</span>
          <span> is a student at </span>
          <span className="text-amber-500">Oregon </span> <span  className="text-neutral-950">State </span> <span className="text-amber-500">University</span>
        </div>

        <img
          className="absolute object-cover ml-[33vw] mt-[200px]"
          src="/images/temp-image.webp"
          alt="profile-image"
        ></img>

      </div>
  
</div>
);
};

export default Home;
