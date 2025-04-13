import React from "react";
import Logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaTelegram, FaXTwitter } from "react-icons/fa6";
import { Rajdhani } from "next/font/google";
import { FaRegChartBar } from "react-icons/fa";

const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <nav
      className={`${rajdhani.className} flex justify-between items-center px-8 py-3 text-white absolute top-0 left-0 right-0 w-full`}
    >
      <div className="flex items-center gap-2">
        <Image src={Logo} alt="Logo" width={126} height={78} priority />
        <span className="uppercase text-3xl font-bold">Clitoris</span>
      </div>
      <ul className="flex items-center gap-8">
        <Link href="#" className="flex items-center gap-2">
          <FaXTwitter size={24} color="white" />
          <span className="text-xl">X/Twitter</span>
        </Link>
        <Link href="#" className="flex items-center gap-2">
          <FaTelegram size={24} color="white" />
          <span className="text-xl">Telegram</span>
        </Link>
        <Link href="#" className="flex items-center gap-2">
          <FaRegChartBar size={24} color="white" />
          <span className="text-xl">Chart</span>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
