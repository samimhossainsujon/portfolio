import { PiHexagonThin } from "react-icons/pi";

const HeroImage = () => {
  return (
    <div className="relative items-center self-end justify-center w-full h-full">
      <div className="w-full h-full ">
        <img
          src="../../../public/images/me.png"
          alt="Abdelrahman Qassem"
          className="w-auto h-auto md:max-w-[570px] sm:max-w-[380px] absolute bottom-[0px] z-10 left-[50%] -translate-x-[50%]"
        />
        <div className="w-full h-full absolute  bottom-[-20%] -z-10 flex justify-center items-center rotate-90">
          <PiHexagonThin className=" md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-orange opacity-70  animate-[spin_20s_linear_infinite] " />
        </div>
        <div className="w-full h-full absolute  bottom-[-20%] -z-10 flex justify-center items-center rotate-90">
          <PiHexagonThin className=" md:h-[90%] sm:h-[120%] blur-lg min-h-[600px] w-auto text-orange opacity-70  animate-[spin_20s_linear_infinite] " />
        </div>
        <div className="w-full h-full absolute  bottom-[-20%] -z-10 flex justify-center items-center">
          <PiHexagonThin className=" md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan opacity-70  animate-[spin_20s_linear_infinite] " />
        </div>
        <div className="w-full h-full absolute  bottom-[-20%] -z-10 flex justify-center items-center">
          <PiHexagonThin className=" md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan opacity-70 blur-lg  animate-[spin_20s_linear_infinite] " />
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
