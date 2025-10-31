"use client";

import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export function ThreeDMarqueeDemoSecond() {
  const images = [
    "/img3.jpg",
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img3.jpg",
  ];
  return (
    <div className="relative mx-auto flex h-screen w-full  flex-col items-center justify-center overflow-hidden ">
      <h2 className="relative z-20 mx-auto max-w-6xl text-center text-[44px] leading-tight tracking-tight font-bold text-balance text-white md:text-4xl lg:text-7xl">
        Transform Your Walls <br /> into Art
      </h2>
      <p className="relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-200 md:text-base">
        Explore unique art prints and custom posters that bring personality and emotion to every corner of your home. Crafted with love, printed to perfection.
      </p>

      <div className="z-20">
        <button className=" border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none w-[180px]">
          SHOP NOW
        </button>
      </div>

      {/* overlay */}
      <div className="absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/40" />
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 min-h-full w-full"
        images={images}
      />
    </div>
  )
}