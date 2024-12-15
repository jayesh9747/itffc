
import getinvolvedheroimg from '../../assets/getinvolvedheroimg.png';
function GetInvolvedHeroSection(){

    return(  
        <div className="relative w-full  h-[181px] sm:h-[181px]  md:h-[340px] lg:h-[346px]  flex items-center justify-center bg-cover bg-center sm:bg-" style={{ backgroundImage: `url(${getinvolvedheroimg})` }}>
             <div
            className="absolute inset-y-0 left-0 w-full"
            style={{
              background: `linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0))`,
            }}
          ></div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center px-4 flex flex-col ">
        <h1 className="px-6 text-[20px]  leading-[25px] md:text-[40px] md:leading-[50px] lg:text-[40px] lg:leading-[50px]    font-bold text-white font-quicksand ">
        Bringing joy to every child one step at a time!
        </h1>
        <p className="p-2 text-[9px] leading-[11px] sm:text-[8.71px] sm:leading-[10.54px] md:text-[20px] md:leading-[24.2px] lg:text-[20px] lg:leading-[24.2px]   text-white max-w-xl sm:max-w-xl md:max-w-4xl xl:max-w-4xl  2xl:max-w-6xl  font-inter ">
        We envision a world where every child thrives, embracing diversity and empowering neurodiverse kids to reach their full potential.

        </p>
      </div>
    </div>
    );
}
export default GetInvolvedHeroSection;