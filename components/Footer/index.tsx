import { Rajdhani } from "next/font/google";
import React from "react";

const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <footer
      className={`w-full py-[50px] flex items-center justify-center ${rajdhani.className} text-white`}
    >
      <div className="flex flex-col gap-2 items-center justify-center">
        <div className="flex gap-2 items-center">
          <div className="min-w-[40px] min-h-[40px] bg-gradient-to-r rounded-full text-center from-[#9D8DDB] to-[#6A4DC4] text-lg flex items-center justify-center">
            T
          </div>
          <div className="min-w-[40px] min-h-[40px] bg-gradient-to-r rounded-full text-center from-[#9D8DDB] to-[#6A4DC4] text-lg flex items-center justify-center">
            D
          </div>
          <div className="min-w-[40px] min-h-[40px] bg-gradient-to-r rounded-full text-center from-[#9D8DDB] to-[#6A4DC4] text-lg flex items-center justify-center">
            I
          </div>
          <div className="min-w-[40px] min-h-[40px] bg-gradient-to-r rounded-full text-center from-[#9D8DDB] to-[#6A4DC4] text-lg flex items-center justify-center">
            Y
          </div>
        </div>
        <span>© 2025 CLITORIS COIN. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
