import React, { useState } from "react";
import Layout from "./Layout";
import { useLanguage } from "../LanguageContext"; // Assuming you have a LanguageContext for translations
import capacitaciones from "../assets/capacitaciones.jpg";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
} from "@material-tailwind/react";
import { IoClose } from "react-icons/io5";

const Workshops = () => {
  const { translations, language } = useLanguage(); // Fetch translations from your context
  const [openCorporate, setOpenCorporate] = useState(false);

  const handleOpenCorporate = () => {
    setOpenCorporate(true);
  };

  const handleCloseCorporate = () => {
    setOpenCorporate(false);
  };

  return (
    <div className="relative w-full h-full pt-10">
      <Layout className={"py-16"}>
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 text-3xl leading-none tracking-tight text-softPurple md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-2 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-softPurple lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="2c67e949-4a23-49f7-bf27-ca140852cf21"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#2c67e949-4a23-49f7-bf27-ca140852cf21)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="text-5xl font-bold text-center text-softPurple lg:text-7xl font-display relative">
                Workshops
              </span>
            </span>{" "}
          </h2>
          <p className="text-base text-softPurple">
            {translations.workshops.intro}
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 sm:mx-auto">
          {translations.workshops.talleres.map((taller, index) => (
            <div key={index}>
              <div className="p-8 rounded-lg bg-softPurple">
                <div className="mb-4 text-start">
                  <p className="text-xl font-medium tracking-wide text-white">
                    {taller.title}
                  </p>
                </div>
                <ul className="mb-8 space-y-5">
                  <li className="flex items-center">
                    <div className="mr-3">
                      <svg
                        className="w-4 h-4 text-white"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeWidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          fill="none"
                          r="11"
                          stroke="currentColor"
                        />
                      </svg>
                    </div>
                    <p className="font-normal text-base text-white/90">
                      {taller.description}
                    </p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3">
                      <svg
                        className="w-4 h-4 text-white"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeWidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          fill="none"
                          r="11"
                          stroke="currentColor"
                        />
                      </svg>
                    </div>
                    <p className="font-medium text-gray-300">
                      {taller.description2}
                    </p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3">
                      <svg
                        className="w-4 h-4 text-white"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeWidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          fill="none"
                          r="11"
                          stroke="currentColor"
                        />
                      </svg>
                    </div>
                    <p className="font-medium text-white/90">
                      {taller.description3}
                    </p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3">
                      <svg
                        className="w-4 h-4 text-white"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeWidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          fill="none"
                          r="11"
                          stroke="currentColor"
                        />
                      </svg>
                    </div>
                    <p className="font-medium text-white/90">
                      {taller.description4}
                    </p>
                  </li>
                </ul>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide transition duration-200 rounded shadow-md opacity-50 cursor-not-allowed bg-lightGrey bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none"
                  disabled
                >
                  Obtener info
                </button>
              </div>
              <div className="w-11/12 h-2 mx-auto rounded-b opacity-75 bg-softPurple" />
              <div className="w-10/12 h-2 mx-auto rounded-b opacity-50 bg-softPurple" />
              <div className="w-9/12 h-2 mx-auto rounded-b opacity-25 bg-softPurple" />
            </div>
          ))}
        </div>
        <div
          className="relative flex flex-col items-center px-8 py-16 mt-8 bg-black bg-center bg-cover rounded-lg shadow-lg bg-opacity-60"
          style={{ backgroundImage: `url(${capacitaciones})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

          {/* Text */}
          <div className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="w-full lg:w-3/5">
              {language === "es" ? (
                <div>
                  <h3 className="mb-6 text-white text-3xl md:text-4xl font-semibold font-display">
                    Capacitaciones Corporativas
                  </h3>
                  <p className="text-white text-base">
                    Capacitaciones destinadas a empoderar y potenciar la imagen
                    individual de tu equipo de trabajo, encontrando el sentido
                    de pertenencia, con una presencia ejecutiva imponente que
                    esté alineada a los valores de la empresa a la que
                    representan. ¡Recuerda que la Imagen de la compañía la
                    transmiten sus empleados!
                  </p>
                </div>
              ) : (
                <div>
                  <h3 className="mb-6 text-white text-3xl md:text-4xl font-semibold font-display">
                    Corporate Training
                  </h3>
                  <p className="text-white text-base">
                    I'm here to help you and your team feel empowered and
                    confident in your work. I'll help you find your own unique
                    style and sense of belonging, so you can make a great
                    impression with an executive presence that's in line with
                    the values of your company. Remember, your company's image
                    is shaped by the people who represent it!
                  </p>
                </div>
              )}
            </div>
            {/* CTA Button */}
            <Button
              className="mt-8 px-4 py-2 text-base font-medium capitalize font-poppins bg-lightGrey text-softPurple shadow-md rounded-lg"
              onClick={handleOpenCorporate}
            >
              {language === "es" ? "Más info" : "More info"}
            </Button>
            <Dialog
              className="p-2 border-softPurple border-3 bg-lightGrey w-full overflow-hidden max-h-[90vh]"
              open={openCorporate}
              handler={handleCloseCorporate}
            >
              <div className="flex items-start justify-between">
                <DialogHeader className="flex items-center justify-between w-full text-2xl font-semibold text-white rounded-lg rounded-b-none font-poppins bg-softPurple">
                  {language === "es" ? (
                    <>Capacitaciones Corporativas</>
                  ) : (
                    <>Corporate Training</>
                  )}
                  <IoClose
                    className="cursor-pointer"
                    onClick={handleCloseCorporate}
                  />
                </DialogHeader>
              </div>
              <DialogBody className="text-base font-poppins font-normal text-services/70 overflow-y-auto max-h-[70vh]">
                {language === "es" ? (
                  <>
                    <h2 className="font-poppins text-softPurple text-2xl mb-4 font-bold underline">
                      Ofrezco dos tipos de capacitaciones:
                    </h2>

                    <p className="font-poppins text-softPurple">
                      • Capacitaciones destinadas a empoderar y potenciar la imagen individual
                      de tu equipo de trabajo, encontrando el sentido de pertenencia, con una
                      presencia ejecutiva imponente que esté alineada a los valores de la
                      empresa a la que representan. ¡Recuerda que la Imagen de la compañía la
                      transmiten sus empleados!
                      <br />
                      <br />
                      • También, brindo capacitaciones especialmente armadas, personalizadas y
                      adaptadas para el sector comercial de empresas de indumentaria. <br />
                      De acuerdo a los objetivos de cada uno brindo estos talleres para mejorar
                      las habilidades de los asesores comerciales con el fin de mejorar y
                      potenciar la experiencia de compra de los clientes.
                      <br />
                      <br />
                      Como asesora de imagen y estilista de moda brindo todas las herramientas
                      y conocimientos necesarios para que los asesores de venta adquieran
                      mayor seguridad con los clientes. Las capacitaciones se centran en las
                      bases de imagen, estilo, colorimetría, psicología del color,
                      combinaciones, armados de cápsulas para impulsar mayores ventas, entre
                      otras.
                      <br />
                      <br />
                      La finalidad es que detrás de cada asesor comercial haya una persona que
                      esté realmente capacitada para ayudar a cada cliente en su experiencia
                      de compra, potenciar la fidelidad con ellos y que esto se vea reflejado
                      en un aumento de ventas.
                    </p>
                  </>
                ) : (
                  <>

                    <h2 className="font-poppins text-softPurple text-2xl mb-4 font-bold underline">
                      I offer two types of training:
                    </h2>

                    <p className="font-poppins text-softPurple">
                      • I'm here to help you and your team feel empowered and confident in
                      your work. I'll help you find your own unique style and sense of
                      belonging, so you can make a great impression with an executive presence
                      that's in line with the values of your company. Remember, your company's
                      image is shaped by the people who represent it!
                      <br />
                      <br />
                      • I'm a corporate trainer with lots of experience in designing,
                      assembling and customising workshops and training programmes for
                      companies. I'm passionate about helping sales consultants improve their
                      skills so that they can provide an enhanced shopping experience for
                      customers.
                      <br />
                      <br />
                      As an image consultant and fashion stylist, I'm also able to provide all
                      the tools and knowledge necessary for sales consultants to gain greater
                      confidence with customers. The trainings focus on the basics of image,
                      style, colourimetry, colour psychology, combinations, capsule assembly to
                      boost sales, and so much more!
                      <br />
                      <br />
                      The aim is that behind each commercial advisor there is a person who is
                      really trained to help each customer in their shopping experience, to
                      enhance loyalty with them, and that this is reflected in an increase in
                      sales.
                    </p>
                  </>
                )}
              </DialogBody>

            </Dialog>
          </div>
        </div>
        <div className="w-11/12 h-2 mx-auto rounded-b opacity-75 bg-softPurple" />
        <div className="w-10/12 h-2 mx-auto rounded-b opacity-50 bg-softPurple" />
        <div className="w-9/12 h-2 mx-auto rounded-b opacity-25 bg-softPurple" />
      </Layout>
    </div>
  );
};

export default Workshops;
