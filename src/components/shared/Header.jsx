"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";

const headerLinks = [
  {
    linkText: "Upload Data",
    linkTo: "/upload-data",
  },
  {
    linkText: "Data For Sale",
    linkTo: "/sale",
  },
];

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [openNavbar, setOpenNavbar] = useState(false);

  const handleNavbar = () => {
    setOpenNavbar(!openNavbar);
  };

  return (
    <div className=" bg-[#ffffff] font-poppins py-3">
      <div className="w-[90%] md:w-[90%] mx-auto flex justify-between items-center">
        <div className="flex w-full justify-between items-center gap-16">
          <Link href="/" className="lg:block hidden">
            <img src="/logo.png" alt="logo" className="w-[50px]" />
          </Link>
          <Link href="/" className="lg:hidden block">
            <img src="logo__small.png" alt="logo" className="w-[50px]" />
          </Link>
          <div className="hidden lg:flex justify-start items-center gap-10">
            <div className="flex justify-start items-center gap-10">
              {headerLinks.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-start items-start flex-col"
                >
                  <Link
                    className={`${
                      pathname === item.linkTo
                        ? "text-[#3eb8bd]"
                        : "text-[#156b6e]"
                    }`}
                    key={index}
                    href={item.linkTo}
                  >
                    {item.linkText}
                  </Link>

                  {pathname === item.linkTo && (
                    <div className="bg-[#156b6e] h-[1px] w-[80%]"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center gap-3 md:gap-5">
            <div className="flex justify-between items-center gap-3 md:gap-5">
              {/* <button className="hidden lg:block outline-none border-[1px] py-2 px-4 rounded-[40px] border-[#fff] text-[#fff]">
                <Link href="/promotion">Promote My Business</Link>
              </button> */}
              <button
                className="outline-none lg:text-base text-[14px] py-[5px] sm:py-2 px-3 sm:px-4  rounded-md bg-[#156b6e] text-[#fff]"
                onClick={() => router.push("/dashboard")}
              >
                Dashboard
              </button>
              <img
                src="/images/toggle__open.png"
                alt="logo"
                className="lg:hidden block cursor-pointer"
                onClick={handleNavbar}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dawer */}
      {openNavbar && (
        <div
          className="block  basis-full overflow-hidden  lg:hidden w-[90%] mx-auto"
          style={{ height: "auto" }}
        >
          <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
            {headerLinks.map((item) => (
              <li
                key={item.linkTo}
                onClick={handleNavbar}
                className={`text-[#156b6e] block antialiased font-sans text-sm leading-normal  p-1  lg:transition-transform lg:hover:scale-105`}
              >
                <Link className="flex items-center" href={item.linkTo}>
                  {item.linkText}
                </Link>
              </li>
            ))}
          </ul>

          {/* <Link
            href={"/promotion"}
            onClick={handleNavbar}
            className="text-center text-sm py-2 px-4  text-white bg-[#D42978] hover:shadow-lg block w-full mb-2 rounded-[16px] capitalize shadow-none"
          >
            <span>Promote My Business</span>
          </Link> */}
        </div>
      )}
    </div>
  );
};

export default Header;
