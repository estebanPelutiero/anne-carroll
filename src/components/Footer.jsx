import React from "react";
import LogoFooter from "../assets/LogoFooter.svg";
import LogoFooterWords from "../assets/LogoFooterWords.svg";
import Layout from "./Layout";
import Whatsapp from "../assets/whatsapp.svg";
import Instagram from "../assets/instagram.svg";
import Linkedin from "../assets/linkedin.svg";
import Gmail from "../assets/gmail.svg";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div id="contact" className="w-full relative py-12 bg-softPurple">
      <Layout className="flex flex-col md:flex-row lg:items-end items-center justify-between">
        <div className="flex flex-col md:mb-0">
          <div className="text-white text-center lg:text-start font-display font-bold text-2xl mb-4">
            Navegación
          </div>
          <div className="flex flex-col items-center md:flex-row gap-8">
            <div className="flex flex-col items-center lg:items-start gap-2">
              <Link
                to="hero"
                smooth={true}
                offset={-100}
                className="text-white/80 hover:text-white text-base font-normal cursor-pointer"
              >
                Home
              </Link>
              <Link
                to="services"
                smooth={true}
                offset={-100}
                className="text-white/80 hover:text-white text-base font-normal cursor-pointer"
              >
                Servicios
              </Link>
              <Link
                to="testimonial"
                smooth={true}
                offset={-80}
                className="text-white/80 hover:text-white text-base font-normal cursor-pointer"
              >
                Reviews
              </Link>
            </div>
            <div className="flex flex-col items-center lg:items-start gap-2">
              <Link
                to="workshops"
                smooth={true}

                className="text-white/80 hover:text-white text-base font-normal cursor-pointer"
              >
                Workshops
              </Link>
              <Link
                to="about"
                smooth={true}
                offset={-100}
                className="text-white/80 hover:text-white text-base font-normal cursor-pointer"
              >
                Sobre mí
              </Link>
              <Link
                to="contact"
                smooth={true}

                className="text-white/80 hover:text-white text-base font-normal cursor-pointer"
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 my-12 lg:mb-0">
          <a href="https://api.whatsapp.com/send?phone=5491164606306" target="_blank" rel="noopener noreferrer">
            <img src={Whatsapp} className="opacity-90 hover:opacity-100 hover:-translate-y-1 ease-in-out duration-200" alt="WhatsApp" />
          </a>
          <a href="https://www.instagram.com/pachucarroll" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} className="opacity-90 hover:opacity-100 hover:-translate-y-1 ease-in-out duration-200" alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/analiacarroll" target="_blank" rel="noopener noreferrer">
            <img src={Linkedin} className="opacity-90 hover:opacity-100 hover:-translate-y-1 ease-in-out duration-200" alt="LinkedIn" />
          </a>
          <a href="mailto:carroll.analia@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={Gmail} className="opacity-90 hover:opacity-100 hover:-translate-y-1 ease-in-out duration-200" alt="Gmail" />
          </a>
        </div>
        <div className="flex justify-center md:justify-start items-center">
          {/* Aquí puedes añadir logotipo o contenido adicional */}
          <div className="flex lg:flex-col items-center gap-5 lg:gap-3">
            <img src={LogoFooter} alt="" />
            <img src={LogoFooterWords} alt="" />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Footer;
