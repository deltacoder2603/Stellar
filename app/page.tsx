"use client"; 

import { BgImage } from "@/components/background";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <div className="relative">
        <div className="z-10 fixed top-0 left-0 right-0 w-full">
          <Navbar />
        </div>
        <BgImage />
      </div>
    </>
  );
}
