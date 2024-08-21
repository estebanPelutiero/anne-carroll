import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import { useLanguage } from '../LanguageContext'; // Import useLanguage hook from context
import video from "../assets/videoherocompressed.mp4";

const Hero = () => {
  const { translations } = useLanguage(); // Assuming translations.hero is correctly imported

  return (
    <div id="hero" className="mt-[69.76px] lg:mt-[73.83px]">
      {/* Slide 1 */}
      <div className="relative h-[calc(100vh-64px)] w-full">
        <video
          className="object-cover w-full h-full"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src={video}
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 grid w-full h-full place-items-center bg-black/40">
          <div className="flex flex-col items-center text-center md:w-2/3 lg:w-[55%]">
            <h1 className="mb-4 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl lg:leading-tight font-display">
              {translations.hero.slide1.title}{" "}
              <span className="italic">{translations.hero.slide1.titleItalic}</span>
              <br />
              {translations.hero.slide1.title2}{" "}
              <span className="italic">{translations.hero.slide1.titleItalic2}</span>
            </h1>
            <Typography className="w-[70%] mb-12 text-white opacity-90 font-poppins text-base leading-normal">
              {translations.hero.slide1.p}
            </Typography>
            <div>
              <a href="https://api.whatsapp.com/send?phone=5491164606306" target="_blank" rel="noopener noreferrer">
                <Button className="px-5 py-3 text-base font-semibold capitalize font-poppins bg-lightGrey text-softPurple hover:shadow-softPurple/60">
                  {translations.hero.slide1.cta}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Hero;
