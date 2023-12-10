"use client";
import { useRouter } from "next/navigation";
import { IoMdHome } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

const Hero = ({ pageTitle }) => {
  const router = useRouter();
  return (
    <div
      style={{
        background:
          "linear-gradient( 135deg, rgba(0, 0, 0, 0.5) 45%, rgba(0, 0, 0, 0.2)), url('/hero__bg.webp') no-repeat center center/cover",
      }}
      className="w-full min-h-[70vh] relative flex justify-center items-center"
    >
      <h1 className="font-paralucent text-[#fff] text-[70px] leading-[80px]">
        {pageTitle}
      </h1>
      <div className="absolute bottom-0 right-0 left-0 flex justify-center items-center py-5 border-t-[1px] border-[#d3d1d1]">
        <div className="text-[#fff] font-poppins  flex justify-center items-center w-fit">
          <IoMdHome className="text-[25px] mb-1 mr-2" />
          <span
            onClick={() => router.push("/")}
            className="font-semibold cursor-pointer"
          >
            Home
          </span>
          <MdKeyboardArrowRight />
          <span className="text-sm">{pageTitle}</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
