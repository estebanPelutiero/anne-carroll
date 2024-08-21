import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Collapse, Typography, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logoNav from '../assets/Logo.svg';
import logoWords from '../assets/LogoWords.svg';
import Switcher from "./Switcher"; // Import your Switcher component
import { useLanguage } from '../LanguageContext'; // Import useLanguage hook from context

const NavList = ({ closeMenu }) => {
  const handleClose = () => {
    closeMenu();
  };

  const { toggleLanguage, language } = useLanguage(); // Access language context
  
  const { translations } = useLanguage();


  return (
    <>
      {/* desktop */}

      <ul className="z-10 flex-col hidden gap-2 mt-6 lg:flex lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-3">
        <Typography
          as="li"
          variant="small"
          className="flex justify-end lg:px-4 py-3 border-b-[1px] border-black/10 lg:border-none"
        >
          <Link
            smooth={true}
            spy={true}
            to="hero"
            offset={-70}
            className="flex items-center text-base font-normal transition-colors cursor-pointer hover:text-orange font-poppins text-softPurple"
          >
            {translations.nav.home}
          </Link>
        </Typography>
        <Typography
          as="li"
          variant="small"
          className="flex justify-end lg:px-4 py-3 border-b-[1px] border-black/10 lg:border-none"
        >
          <Link
            smooth={true}
            spy={true}
            offset={-100}
            to="services"
            className="flex items-center text-base font-normal transition-colors cursor-pointer hover:text-orange font-poppins text-softPurple"
          >
            {translations.nav.services}
          </Link>
        </Typography>
        <Typography
          as="li"
          variant="small"
          className="flex justify-end lg:px-4 py-3 border-b-[1px] border-black/10 lg:border-none"
        >
          <Link
            smooth={true}
            spy={true}
            to="gift"
            className="flex items-center text-base font-normal transition-colors cursor-pointer hover:text-orange font-poppins text-softPurple"
          >
            {translations.nav.gift}
          </Link>
        </Typography>
        <Typography
          as="li"
          variant="small"
          className="flex justify-end lg:px-4 py-3 border-b-[1px] border-black/10 lg:border-none"
        >
          <Link
            smooth={true}
            spy={true}
            offset={-100}
            to="about"
            className="flex items-center text-base font-normal transition-colors cursor-pointer hover:text-orange font-poppins text-softPurple"
          >
            {translations.nav.about}
          </Link>
        </Typography>
        <Typography
          as="li"
          variant="small"
          className="flex justify-end lg:px-4 py-3 border-b-[1px] border-black/10 lg:border-none"
        >
          <Link
            smooth={true}
            spy={true}
            to="testimonial"
            className="flex items-center text-base font-normal transition-colors cursor-pointer hover:text-orange font-poppins text-softPurple"
          >
            {translations.nav.reviews}
          </Link>
        </Typography>
        <Typography
          as="li"
          variant="small"
          className="flex justify-end lg:px-4 py-3 border-b-[1px] border-black/10 lg:border-none"
        >
          <Link
            smooth={true}
            spy={true}
            to="contact"
            className="flex items-center text-base font-normal transition-colors cursor-pointer hover:text-orange font-poppins text-softPurple"
          >
            {translations.nav.contact}
          </Link>
        </Typography>
        <Typography
          as="li"
          variant="small"
          className="flex justify-end pt-3 pb-4 lg:pl-4 lg:py-3"
        >
          <Switcher toggleLanguage={toggleLanguage} currentLanguage={language} />
        </Typography>
      </ul>

      {/* mobile */}

      <ul className="z-10 flex flex-col gap-2 mt-6 lg:hidden lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
          as="li"
          variant="small"
          className="flex justify-end lg:px-4 py-3 border-b-[1px] border-black/10 lg:border-none"
        >
          <Link
          onClick={handleClose}
            smooth={true}
            spy={true}
            to="hero"
            offset={-70}
            className="flex items-center text-base font-normal transition-colors cursor-pointer hover:text-orange font-poppins text-softPurple"
          >
            {translations.nav.home}
          </Link>
        </Typography>
        <Typography
          as="li"
          variant="small"
          className="flex justify-end lg:px-4 py-3 border-b-[1px] border-black/10 lg:border-none"
        >
          <Link
            smooth={true}
            onClick={handleClose}
            spy={true}
            to="services"
            offset={-100}
            className="flex items-center text-base font-normal transition-colors cursor-pointer hover:text-orange font-poppins text-softPurple"
          >
            {translations.nav.services}
          </Link>
        </Typography>
        <Typography
          as="li"
          variant="small"
          className="flex justify-end lg:px-4 py-3 border-b-[1px] border-black/10 lg:border-none"
        >
          <Link
            smooth={true}
            spy={true}
            onClick={handleClose}
            to="gift"
            offset={-50}
            className="flex items-center text-base font-normal transition-colors cursor-pointer hover:text-orange font-poppins text-softPurple"
          >
            Gift Card
          </Link>
        </Typography>
        <Typography
          as="li"
          variant="small"
          className="flex justify-end lg:px-4 py-3 border-b-[1px] border-black/10 lg:border-none"
        >
          <Link
            smooth={true}
            onClick={handleClose}
            spy={true}
            to="about"
            offset={-50}
            className="flex items-center text-base font-normal transition-colors cursor-pointer hover:text-orange font-poppins text-softPurple"
          >
            {translations.nav.about}
          </Link>
        </Typography>
        <Typography
          as="li"
          variant="small"
          className="flex justify-end lg:px-4 py-3 border-b-[1px] border-black/10 lg:border-none"
        >
          <Link
            smooth={true}
            spy={true}
            to="testimonial"
            onClick={handleClose}
            offset={-50}
            className="flex items-center text-base font-normal transition-colors cursor-pointer hover:text-orange font-poppins text-softPurple"
          >
            Reviews
          </Link>
        </Typography>
        <Typography
          as="li"
          variant="small"
          className="flex justify-end lg:pl-4 py-3 border-b-[1px] border-black/10 lg:border-none"
        >
          <Link
            smooth={true}
            spy={true}
            to="contact"
            onClick={handleClose}
            offset={100}
            className="flex items-center text-base font-normal transition-colors cursor-pointer hover:text-orange font-poppins text-softPurple"
          >
            {translations.nav.contact}
          </Link>
        </Typography>
        <Typography
          as="li"
          variant="small"
          className="flex justify-end pt-3 pb-5 lg:px-4"
        >
          {/* Add Switcher component for language switching */}
          <Switcher toggleLanguage={toggleLanguage} currentLanguage={language} />
        </Typography>
      </ul>
    </>
  );
};

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const closeMenu = () => {
    setOpenNav(false);
  };

  return (
    <>
      <div className="z-[100] fixed top-0 w-full bg-lightGrey shadow-sm">
        <nav className="mx-auto max-w-[1120px] shadow-none px-4 md:px-8 py-0 lg:px-0 border-none">
          <div className="flex items-center justify-between py-2">
            <Typography href="#" variant="h6" className="cursor-pointer">
              <div className="flex items-center gap-2 lg:gap-4">
                <Link
                  to="home"
                  smooth={true}
                  offset={-80}
                  className="cursor-pointer"
                  duration={1300}
                >
                  <img
                    className="w-14 lg:w-16"
                    src={logoNav}
                    loading="lazy"
                    alt="Anne Carroll | Estilo y Moda"
                  />
                </Link>
                <Link
                  to="home"
                  smooth={true}
                  offset={-80}
                  className="cursor-pointer"
                  duration={1300}
                >
                  <img
                    className="w-28 lg:w-36"
                    src={logoWords}
                    alt="Anne Carroll | Estilo y Moda"
                  />
                </Link>
              </div>
            </Typography>
            <div className="hidden lg:block">
              <NavList />
            </div>
            <IconButton
              variant="text"
              className="w-6 h-6 ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <XMarkIcon className="w-7 text-softPurple" strokeWidth={1.5} />
              ) : (
                <Bars3Icon className="w-7 text-softPurple" strokeWidth={1.5} />
              )}
            </IconButton>
          </div>
          <Collapse open={openNav}>
            <NavList closeMenu={closeMenu} />
          </Collapse>
        </nav>
      </div>
    </>
  );
};

export default Nav;
