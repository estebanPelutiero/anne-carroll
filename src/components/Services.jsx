import React, { useState } from "react";
import Layout from "./Layout";
import { useLanguage } from "../LanguageContext";
import colorimetria from "../assets/colorimetria.jpg";
import detox from "../assets/detox.jpg";
import outfits from "../assets/armadodeoutfits.jpg";
import shopper from "../assets/personalshopper.jpeg";
import valijas from "../assets/armadodevalijas.jpg";
import estilismo from "../assets/estilismo.jpg";
import big from "../assets/asesoramientocomplementario.jpg";
import { IoClose } from "react-icons/io5";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
} from "@material-tailwind/react";

const Services = () => {
  const { translations, language } = useLanguage();

  const [openColorimetria, setOpenColorimetria] = useState(false);
  const [openDetox, setOpenDetox] = useState(false);
  const [openOutfits, setOpenOutfits] = useState(false);
  const [openShopper, setOpenShopper] = useState(false);
  const [openValijas, setOpenValijas] = useState(false);
  const [openEstilismo, setOpenEstilismo] = useState(false);

  const handleOpenColorimetria = () => {
    setOpenColorimetria(true);
  };

  const handleCloseColorimetria = () => {
    setOpenColorimetria(false);
  };

  const handleOpenDetox = () => {
    setOpenDetox(true);
  };

  const handleCloseDetox = () => {
    setOpenDetox(false);
  };

  const handleOpenOutfits = () => {
    setOpenOutfits(true);
  };

  const handleCloseOutfits = () => {
    setOpenOutfits(false);
  };

  const handleOpenShopper = () => {
    setOpenShopper(true);
  };

  const handleCloseShopper = () => {
    setOpenShopper(false);
  };

  const handleOpenValijas = () => {
    setOpenValijas(true);
  };

  const handleCloseValijas = () => {
    setOpenValijas(false);
  };

  const handleOpenEstilismo = () => {
    setOpenEstilismo(true);
  };

  const handleCloseEstilismo = () => {
    setOpenEstilismo(false);
  };

  return (
    <Layout id={"services"} className="">
      {/* title */}
      <div className="flex flex-col items-center w-full my-12">
        <div className="text-5xl font-bold text-center text-softPurple lg:text-7xl font-display">
          {translations.services.title}
        </div>
        <div className="mt-6 text-center text-softPurple text-base font-poppins leading-normal w-full lg:w-[64%]">
          {translations.services.p}
        </div>
      </div>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 - Colorimetria */}
        <div
          className="min-h-[350px] bg-colorimetria CardMaestra w-full bg-brown rounded-lg shadow flex flex-col items-center justify-center pb-10 pt-6 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${colorimetria})` }}
        >
          <div className="absolute inset-0 bg-black rounded-lg bg-opacity-60"></div>
          <div className="relative w-[70%] text-center text-white text-3xl font-semibold font-['Playfair_Display'] mt-auto">
            {translations.services.colorimetrySilhouette.title}
          </div>
          <div className="relative w-[70%] mt-auto text-center text-white text-base font-['Poppins']">
            {translations.services.colorimetrySilhouette.description}
          </div>
          <div className="relative mt-auto">
            <Button
              className="px-4 py-2 text-base font-medium capitalize font-poppins bg-lightGrey text-softPurple"
              onClick={handleOpenColorimetria}
            >
              {language === "es" ? "Más info" : "More info"}
            </Button>
            <Dialog
              className="p-2 border-softPurple border-3 bg-lightGrey w-full overflow-hidden max-h-[90vh]"
              open={openColorimetria}
              handler={handleCloseColorimetria}
            >
              <div className="flex items-start justify-between">
                <DialogHeader className="flex items-center justify-between w-full text-2xl font-semibold text-white rounded-lg rounded-b-none font-poppins bg-softPurple">
                  {translations.services.colorimetrySilhouette.title}
                  <IoClose
                    className="cursor-pointer"
                    onClick={handleCloseColorimetria}
                  />
                </DialogHeader>
              </div>
              <DialogBody className="text-base font-poppins font-normal text-services/70 overflow-y-auto max-h-[70vh]">
                <div className="flex flex-wrap justify-start gap-2 mb-4">
                  <div className="w-fit text-center text-base font-medium text-softPurple rounded-lg border-softPurple/40 bg-white/40 border py-1 px-2">
                    € 300
                  </div>
                  <div className="w-fit text-center text-base font-medium text-softPurple rounded-lg border-softPurple/40 bg-white/40 border py-1 px-2">
                    {language === "es" ? "3 sesiones" : "3 sessions"}
                  </div>
                </div>
                {language === "es" ? (
                  <p className="text-softPurple">
                    Te invito a descubrir tu relación con los colores, aquellos
                    que te hagan vibrar alto, que te potencien de forma natural.
                    Incorporar tus colores ideales a tu guardarropa llevarán a
                    otro nivel el armado de tus outfits, cómo te ves y cómo te
                    sientes con ellos. Para armar tu paleta de colores tendremos
                    en cuenta tu colorimetría personal, tu silueta, tu estilo y
                    la energía que te transmiten.   <br />
                    <br />
                    <span className="text-softPurple font-semibold leading-loose text-lg">
                      Este servicio consta de tres etapas:
                    </span>{" "}
                    <br />
                    <span className="text-softPurple font-semibold"></span>
                    Para la primera, será necesario completar un cuestionario
                    con la finalidad de conocer cuál es la relación que tienes
                    con los colores, la indumentaria y cortes de las prendas.
                    Luego tendremos nuestra primera sesión virtual para
                    profundizar sobre estos conceptos y conocer tus gustos
                    personales en cuanto a la vestimenta. Esta sesión tiene una
                    duración de aproximadamente 1 hora.
                    <br />
                    <br /> En nuestra segunda sesión nos juntaremos y
                    realizaremos el estudio de colorimetría para descubrir
                    aquellos colores que más te potencian. La etapa 3 es la
                    entrega de material sobre la paleta de colores ideal y
                    cortes de indumentaria que realzan tu silueta.  <br />
                    <br />
                    <span className="text-softPurple font-semibold"> </span>
                    Incluye una etapa previa con un cuestionario a completar +
                    sesión online + sesión presencial + sesión online con
                    entrega de material.
                  </p>
                ) : (
                  <p className="text-softPurple">
                    I'd love to help you discover your relationship with
                    colours! Those that make you vibrate high, that enhance you
                    naturally. Incorporating your ideal colours into your
                    wardrobe will take your outfits, how you look and how you
                    feel with them to another level. To put together your colour
                    palette, we will take into account the energy that they
                    transmit to you, your personal colourimetry, your silhouette
                    and your style.
                    <br />
                    <br />
                    <span class="text-softPurple font-semibold leading-loose text-lg">
                      This service is made up of three stages :
                    </span>
                    <br />
                    <span class="text-softPurple font-semibold">First</span>,
                    I’ll ask you to complete a questionnaire so we can
                    understand your relationship with colours, clothing and
                    cuts. Then, we'll have our first virtual session to explore
                    these concepts and learn about your personal tastes in
                    clothing. This session lasts approximately an hour.
                    <br />
                    <br />
                    In our{" "}
                    <span class="text-softPurple font-semibold">
                      second
                    </span>{" "}
                    session, we'll get together and carry out the colourimetry
                    study to discover those colours that enhance you the most.
                    <br />
                    <br />
                    Stage <span class="text-softPurple font-semibold">
                      3
                    </span>{" "}
                    is all about delivering the goods! I'll be sharing with you
                    the ideal colour palette and clothing cuts that will really
                    enhance your silhouette.
                    <br /> To get you started, I'll be sending you a
                    questionnaire to complete. Then, we'll have an online
                    session, followed by an in-person session and then another
                    online session where we'll be sharing the material.
                  </p>
                )}
              </DialogBody>
            </Dialog>
          </div>
        </div>

        {/* Card 2 - Detox */}
        <div
          className="min-h-[350px] bg-colorimetria CardMaestra w-full bg-brown rounded-lg shadow flex flex-col items-center justify-center pb-10 pt-6 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${detox})` }}
        >
          <div className="absolute inset-0 bg-black rounded-lg bg-opacity-60"></div>
          <div className="relative w-[70%] text-center text-white text-3xl font-semibold font-['Playfair_Display'] mt-auto">
            {translations.services.wardrobeDetox.title}
          </div>
          <div className="relative w-[70%] mt-auto text-center text-white text-base font-['Poppins']">
            {translations.services.wardrobeDetox.description}
          </div>
          <div className="relative mt-auto">
            <Button
              className="px-4 py-2 text-base font-medium capitalize font-poppins bg-lightGrey text-softPurple"
              onClick={handleOpenDetox}
            >
              {language === "es" ? "Más info" : "More info"}
            </Button>
            <Dialog
              className="p-2 border-softPurple border-3 bg-lightGrey w-full overflow-hidden max-h-[90vh]"
              open={openDetox}
              handler={handleCloseDetox}
            >
              <div className="flex items-start justify-between">
                <DialogHeader className="flex items-center justify-between w-full text-2xl font-semibold text-white rounded-lg rounded-b-none font-poppins bg-softPurple">
                  {translations.services.wardrobeDetox.title}
                  <IoClose
                    className="cursor-pointer"
                    onClick={handleCloseDetox}
                  />
                </DialogHeader>
              </div>
              <DialogBody className="text-base font-poppins font-normal text-services/70 overflow-y-auto max-h-[70vh]">
                <div className="flex flex-wrap justify-start gap-2 mb-4">
                  <div className="w-fit text-center text-base font-medium text-softPurple rounded-lg border-softPurple/40 bg-white/40 border py-1 px-2">
                    € 250
                  </div>
                  <div className="w-fit text-center text-base font-medium text-softPurple rounded-lg border-softPurple/40 bg-white/40 border py-1 px-2">
                    4 HS
                  </div>
                </div>
                {language === "es" ? (
                  <p className="text-softPurple">
                    Con el paso del tiempo nuestras prioridades cambian,
                    nuestros objetivos se van modificando y es ese preciso
                    momento donde necesitamos frenar, observarnos, analizar
                    nuestro guardarropa para repensarnos y volver a conectar con
                    nuestro propio estilo personal. <br />
                    <br />
                    Este servicio tiene como finalidad ayudarte a limpiar y
                    poder deshacerte de las vestimentas que ya no te
                    representan. Analizaremos cada una y nos quedaremos con
                    aquellas con las que te identifiques y potencien. Vuelve a
                    enamorarte de tus prendas, recicla, recircula. Los cambios
                    que atravesamos siempre están acompañados por modificaciones
                    en nuestra imagen y estilo personal. No acumules, armemos un
                    guardarropa funcional a tus necesidades, prioridades, a cómo
                    quieres sentirte y ser percibida.  <br />
                    <br />
                    En la sesión online ahondaremos en tu paleta de colores, tu
                    estilo, silueta, tus complementos y accesorios para que al
                    momento del detox, diferenciemos con facilidad aquellas
                    prendas que comunican lo que deseas y generemos lugar
                    haciendo circular aquellas que ya no.  <br />
                    <br />
                    Incluye una primera sesión online + sesión personal para
                    realizar el detox de 4 horas + lista de compras inteligente
                    (alineada a tus necesidades) <br />
                    <br />
                    El resultado será un guardarropas funcional, alineado a tu
                    estilo personal y forma de vida. <br />
                    <br /> En caso de necesitar más tiempo que las 4 horas
                    debido al volumen de ropa y complementos, existe la
                    posibilidad de sumar horas extras, o realizar dos jornadas. {" "}
                    <br />
                    <br />
                  </p>
                ) : (
                  <p className="text-softPurple">
                    As time goes by, our priorities change, our goals change,
                    and it is that precise moment where we need to slow down,
                    take a good look at ourselves, analyse our closet to rethink
                    ourselves and reconnect with our own personal style. The
                    purpose of this service is to help you clean and get rid of
                    the clothes that no longer represent you. We will analyse
                    each one and we will keep those with which you identify and
                    enhance. It's time to fall in love with your clothes again!
                    Recycle, recirculate. We all go through changes, and our
                    image and personal style change with us. Don't accumulate!
                    Let's put together a functional closet that works for you,
                    according to your needs, priorities, and how you want to
                    feel and be perceived. <br />
                    <br />
                    In our online session, we'll explore your colour
                    preferences, style, silhouette, and what makes you feel your
                    best. We'll also look at what complements your style and
                    what accessories you love. This will help us make sure that
                    when it's time for your detox, we can easily identify the
                    clothes that reflect your goals and let go of those that
                    don't.
                    <br />
                    <br />
                    We'll start with a first online session, followed by a
                    4-hour personal detox session and a smart shopping list
                    (aligned to your needs). <br />
                    <br />
                    And the result will be a functional closet, perfectly
                    aligned to your personal style and lifestyle.
                    <br />
                    <br />
                    If you need more time than the four hours, no problem! You
                    can add extra hours or even do two days.
                    <br />
                  </p>
                )}
              </DialogBody>
            </Dialog>
          </div>
        </div>

        {/* Card 3 - outfits  */}
        <div
          className="min-h-[350px] bg-colorimetria CardMaestra w-full bg-brown rounded-lg shadow flex flex-col items-center justify-center pb-10 pt-6 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${outfits})` }}
        >
          <div className="absolute inset-0 bg-black rounded-lg bg-opacity-60"></div>
          <div className="relative w-[70%] text-center text-white text-3xl font-semibold font-['Playfair_Display'] mt-auto">
            {translations.services.outfitCreation.title}
          </div>
          <div className="relative w-[70%] mt-auto text-center text-white text-base font-['Poppins']">
            {translations.services.outfitCreation.description}
          </div>
          <div className="relative mt-auto">
            <Button
              className="px-4 py-2 text-base font-medium capitalize font-poppins bg-lightGrey text-softPurple"
              onClick={handleOpenOutfits}
            >
              {language === "es" ? "Más info" : "More info"}
            </Button>
            <Dialog
              className="p-2 border-softPurple border-3 bg-lightGrey w-full overflow-hidden max-h-[90vh]"
              open={openOutfits}
              handler={handleCloseOutfits}
            >
              <div className="flex items-start justify-between">
                <DialogHeader className="flex items-center justify-between w-full text-2xl font-semibold text-white rounded-lg rounded-b-none font-poppins bg-softPurple">
                  {translations.services.outfitCreation.title}
                  <IoClose
                    className="cursor-pointer"
                    onClick={handleCloseOutfits}
                  />
                </DialogHeader>
              </div>
              <DialogBody className="text-base font-poppins font-normal text-black/70 overflow-y-auto max-h-[70vh]">
                <div className="flex flex-wrap justify-start gap-2 mb-4">
                  <div className="w-fit text-center text-base font-medium text-softPurple rounded-lg border-softPurple/40 bg-white/40 border py-1 px-2">
                    € 200
                  </div>
                  <div className="w-fit text-center text-base font-medium text-softPurple rounded-lg border-softPurple/40 bg-white/40 border py-1 px-2">
                    4 HS
                  </div>
                </div>
                {language === "es" ? (
                  <p className="text-softPurple">
                    ¿Te pasa que tienes un guardarropas lleno de prendas, pero
                    siempre usas lo mismo o sientes que te faltan otras prendas
                    para crear nuevos looks? Con este servicio, partiendo de tus
                    objetivos, actividades laborales y sociales, armamos nuevas
                    propuestas de combinaciones con las prendas que ya tienes!
                    Te permitirá armar nuevos looks creativos, originales y
                    darle vida nuevamente a aquellas prendas que dejaste de lado
                    porque te generan duda sobre cómo usarlas o combinarlas.
                    <br /> <br />
                    El objetivo principal es definir tu estilo personal según
                    colores, prendas,  accesorios ideales y complementos,
                    diseñando un guardarropa cápsula de looks variados, que te
                    ayuden a potenciar tu Imagen, optimizar tu tiempo, dinero y
                    espacio de guardado. Conociendo tu fondo de guardarropa
                    realizaremos una lista de compras inteligente para completar
                    lo que falta en él.
                    <br /> <br />
                    Aprenderás a optimizar cada una de tus prendas armando looks
                    variados de acuerdo a tu estilo de vida, combinando colores,
                    texturas y códigos de vestimenta. <br /> <br />
                    Los outfits se fotografían y luego se envía el material para
                    que siempre lo tengas a tu alcance.. <br /> <br />
                    Cantidad de outfits a armar: 8 (tiempo aproximado 4
                    horas). En caso de querer armar más outfits para la misma
                    temporada, la segunda jornada tiene un 20% de descuento.
                  </p>
                ) : (
                  <p className="text-softPurple">
                    Do you have a closet full of clothes, but you always wear
                    the same or feel that you are missing other items to create
                    new looks? <br /> <br />
                    I can help! Based on your goals, work and social activities,
                    I put together new proposals of combinations with the
                    clothes you already have! It'll help you create new,
                    creative and original looks and give new life to those
                    garments that you've been putting aside because you've been
                    unsure about how to wear them or combine them. <br />
                    <br />
                    The main thing I want to do is help you define your personal
                    style according to colours, garments, ideal accessories and
                    complements, designing a capsule closet of varied looks that
                    will help you enhance your image, optimise your time, money
                    and storage space. <br />
                    <br />
                    We'll work together to create a smart shopping list to
                    complete your closet. You'll learn how to make the most of
                    each garment by putting together varied looks according to
                    your lifestyle, combining colours, textures and dress codes.
                    We'll take photos of the outfits and send them to you, so
                    you'll always have them. <br />
                    <br />
                    Number of outfits: 8 (approximate time 4 hours). And if
                    you'd like to put together more outfits for the same season,
                    I've got a special deal for you! On the second day, you'll
                    get 20% off.
                  </p>
                )}
              </DialogBody>
            </Dialog>
          </div>
        </div>

        {/* Card 4 - Shopper */}
        <div
          style={{ backgroundImage: `url(${shopper})` }}
          className="min-h-[350px] bg-detox CardMaestra w-full bg-brown rounded-lg shadow flex flex-col items-center justify-center pb-10 pt-6 bg-cover bg-center relative"
        >
          <div className="absolute inset-0 bg-black rounded-lg bg-opacity-60"></div>
          <div className="relative w-[70%] text-center text-white text-3xl font-semibold font-['Playfair_Display'] mt-auto">
            {translations.services.personalShopper.title}
          </div>
          <div className="relative w-[70%] mt-auto text-center text-white text-base font-['Poppins']">
            {translations.services.personalShopper.description}
          </div>
          <div className="relative mt-auto">
            <Button
              className="px-4 py-2 text-base font-medium capitalize font-poppins bg-lightGrey text-softPurple"
              onClick={handleOpenShopper}
            >
              {language === "es" ? "Más info" : "More info"}
            </Button>
            <Dialog
              className="p-2 border-softPurple border-3 bg-lightGrey w-full overflow-hidden max-h-[90vh]"
              open={openShopper}
              handler={handleCloseShopper}
            >
              <div className="flex items-start justify-between">
                <DialogHeader className="flex items-center justify-between w-full text-2xl font-semibold text-white rounded-lg rounded-b-none font-poppins bg-softPurple">
                  {translations.services.personalShopper.title}
                  <IoClose
                    className="cursor-pointer"
                    onClick={handleCloseShopper}
                  />
                </DialogHeader>
              </div>
              <DialogBody className="text-base font-poppins font-normal text-black/70 overflow-y-auto max-h-[70vh]">
                <div className="flex justify-start flex-wrap gap-2 mb-4">
                  <div className="w-fit text-center text-base font-medium text-softPurple rounded-lg border-softPurple/40 bg-white/40 border py-1 px-2">
                    € 170 Smart shopper
                  </div>
                  <div className="w-fit text-start text-base font-medium text-softPurple rounded-lg border-softPurple/40 bg-white/40 border py-1 px-2">
                    {language === "es" ? (
                      <>€ 400 Presupuesto Personal Shopper Completo</>
                    ) : (
                      <>€ 400 Complete Personal Shopper Budget</>
                    )}
                  </div>
                </div>
                <pre className="text-base font-poppins font-normal text-black/70 leading-relaxed">
                  {language === "es" ? (
                    <p className="text-softPurple">
                      Cada año nos gusta disponer de un determinado presupuesto
                      para adquirir prendas nuevas con los cambios de temporada.
                      Es muy habitual que en estos momentos compres siempre
                      cosas similares, no consigas lo que buscas y compres
                      prendas que luego terminan en el fondo del guardarropa sin
                      estrenar.
                      <br />
                      <br />
                      Comprar sin haber hecho previamente un análisis te
                      conducirá a tener errores no deseados. Este servicio está
                      pensado y destinado para aquellas personas que quieran
                      minimizar el margen de error y comprar de manera
                      consciente y efectiva. Que cada compra sea un acierto que
                      se suma a tu nuevo guardarropa funcional donde las prendas
                      empiecen a coordinar entre sí, y lo más importante: TE
                      REPRESENTEN.
                      <br />
                      <br />
                      Es un servicio que se contrata las veces que quieras. Es
                      muy recomendable para emprender finalmente el camino de
                      cambio de imagen personal con los conocimientos adquiridos
                      previamente. <br />
                      <br />
                      <span className="font-medium">
                        Personal shopper consta de 2 partes: <br />
                        <br />
                      </span>
                      <span className="underline italic">
                        Smart Shopping:
                      </span>{" "}
                      <br />
                      Comenzaremos con una sesión online donde ahondaremos en
                      los temas del cuestionario previamente completado, lo que
                      me permitirá armar tu lista de compras inteligente
                      personalizada. En la segunda sesión online compartiré y
                      explicaré el tipo de prendas y complementos seleccionados,
                      adjuntando referencias fotográficas. que se basa en lo
                      hablado y trabajado. Las propuestas contemplaran tu paleta
                      de colores, prendas que te estén faltando de acuerdo con
                      lo identificado durante el Detox, cortes, texturas o
                      estampados más favorecedores para ti. Este será el
                      comienzo de la construcción de un guardarropa que
                      coordine, te represente y con el que te identifiques. 
                      Smart Shopping es ideal para quienes buscan sacar el
                      máximos beneficio a la hora de adquirir prendas y
                      complementos nuevos, minimizando el margen de error. Probá
                      la experiencia.!
                      <br />
                      <br />
                      <span className="underline italic">
                        Personal Shopper Completo:
                      </span>{" "}
                      <br />
                      Una vez vistas las referencias realizadas en el Smart
                      Shopping me dedicaré a la búsqueda de prendas y
                      complementos correspondientes a la colección actual. Luego
                      te enviaré un archivo con las búsquedas realizadas para
                      que puedas comenzar a ver qué lugares y prendas puntuales
                      buscaremos el día que realicemos el servicio juntas. {" "}
                      <br />
                      <br />
                      Finalmente, el día del recorrido dispondremos de
                      aproximadamente 4 horas para la búsqueda de tus prendas.
                      Será necesario realizar una pausa, ya que para la clienta
                      es cansador, es mucha información nueva, hay un desgaste
                      por probarse ropa constantemente, y el hecho de que no
                      siempre se consigue lo que se busca, también puede
                      frustrar.
                      <br />
                      <br />
                      Es una experiencia para disfrutar y aprender, ¡no lo
                      olvides! Por eso las pausas son necesarias, para descansar
                      un poco, comer algo, distraerse y también poder hablar
                      sobre cómo va la experiencia al momento.
                      <br />
                      <br />
                      <span className="underline italic">Aclaración:</span>{" "}
                      <br />
                      La pausa no entra dentro de las 4 horas de trabajo de
                      Personal Shopper, ¡es un tiempo extra que está considerado
                      para disfrutar de la experiencia y no tiene costo extra
                      para ti! <br />
                      En caso de necesitar más horas agendaremos un segundo día
                      de recorrido con un 30% de descuento. <br /> <br />
                      (*) Para contratar el servicio de Personal Shopper (el
                      completo) es necesario haber contratado alguno de los
                      servicios previamente, ya que es fundamental conocer a la
                      clienta con mayor profundidad. <br />
                      <br />
                      (*) Es posible contratar sólo Smart Shopping. <br />
                      <br />
                      (*) Personal Shopper puede ser contratado para vivir la
                      experiencia juntas o puedo ser yo la encargada de realizar
                      el recorrido.
                    </p>
                  ) : (
                    <p className="text-softPurple">
                      We all love a new season, don't we? <br />
                      It's a great time to treat yourself to some new clothes!
                      But we all know that it's easy to get carried away and end
                      up buying things you don't really need. And then they end
                      up in the back of the closet, never to be worn again!
                      We've all been there, right? Well, I'm here to help you
                      avoid that! This service is designed for those who want to
                      minimise the margin of error and buy consciously and
                      effectively. Let each purchase be a success that adds to
                      your closet new functional garments that begin to
                      coordinate with each other, and most importantly:{" "}
                      <span className="font-semibold text-softPurple">
                        represent you
                      </span>
                      ! <br />
                      <br />
                      This service is there for you whenever you need it. It's a
                      great idea to finally embark on the path of personal image
                      change with the previously acquired knowledge. <br />
                      <br />
                      <span className="font-semibold text-lg text-softPurple leading-loose">
                        There are two parts to our journey together:
                      </span>{" "}
                      <br />-{" "}
                      <span className="italic font-medium underline leading-loose">
                        Smart Shopping:
                      </span>
                      <br />
                      We'll start with an online session where we'll dive into
                      the topics from your completed questionnaire. This will
                      help me put together a personalized smart shopping list
                      just for you. In the second online session, I'll share and
                      explain the type of garments and accessories I've selected
                      for you, with lots of photos to show you. I'll take into
                      account your colour palette, the garments you're missing
                      according to what we discussed during the Detox, cuts,
                      textures or prints that suit you better. This is the start
                      of building a closet that coordinates, represents you and
                      with which you identify. <br />
                      <br />
                      Smart Shopping is ideal for those who want to get the most
                      out of buying new clothes and accessories, and avoid any
                      mistakes. <br />
                      <br />
                      Why not try it out? <br />
                      <br />
                      <span className="italic font-medium underline leading-loose">
                        - Complete Personal Shopper:
                      </span>{" "}
                      <br />
                      Once you've seen the references in Smart Shopping, I'll be
                      on the hunt for the perfect pieces from the current
                      collection. I'll send you a file with all the searches
                      I've done so you can get a sneak peek of the places and
                      specific garments we'll be looking at on the day of the
                      service. <br />
                      <br />
                      On the day of the tour, we'll have about four hours to
                      find your perfect pieces. It's important to take a break,
                      as it can be tiring for the client. There's a lot of new
                      information to take in, and trying on clothes all the time
                      can be tiring. Not always getting what you're looking for
                      can also be frustrating. This is an experience to enjoy
                      and learn from, so don't forget that! That's why it's so
                      important to take a break! You can rest a little, eat
                      something, distract yourself and also talk about how the
                      experience is going at the moment. <br />
                      <br />
                      Just to be clear, the break is not included in the four
                      hours of work that a Personal Shopper does. It's an extra
                      time that we all enjoy and there's no extra cost for you!{" "}
                      <br />
                      <br />
                      (*) To hire the Personal Shopper service, you'll need to
                      have previously hired one of my other services. This is
                      because it's really important for us to get to know you
                      better. <br />
                      (*) You can also hire Smart Shopping on its own. <br />
                      (*) You can either hire the Personal Shopper to go on the
                      tour with you, or I can do the tour for you.
                    </p>
                  )}
                </pre>
              </DialogBody>
            </Dialog>
          </div>
        </div>

        {/* Card 5 - smart packing */}
        <div
          className="min-h-[350px] bg-colorimetria CardMaestra w-full bg-brown rounded-lg shadow flex flex-col items-center justify-center pb-10 pt-6 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${valijas})` }}
        >
          <div className="absolute inset-0 bg-black rounded-lg bg-opacity-60"></div>
          <div className="relative w-[70%] text-center text-white text-3xl font-semibold font-['Playfair_Display'] mt-auto">
            {translations.services.packingAssistance.title}
          </div>
          <div className="relative w-[70%] mt-auto text-center text-white text-base font-['Poppins']">
            {translations.services.packingAssistance.description}
          </div>
          <div className="relative mt-auto">
            <Button
              className="px-4 py-2 text-base font-medium capitalize font-poppins bg-lightGrey text-softPurple"
              onClick={handleOpenValijas}
            >
              {language === "es" ? "Más info" : "More info"}
            </Button>
            <Dialog
              className="p-2 border-softPurple border-3 bg-lightGrey w-full overflow-hidden max-h-[90vh]"
              open={openValijas}
              handler={handleCloseValijas}
            >
              <div className="flex items-start justify-between">
                <DialogHeader className="flex items-center justify-between w-full text-2xl font-semibold text-white rounded-lg rounded-b-none font-poppins bg-softPurple">
                  {translations.services.packingAssistance.title}
                  <IoClose
                    className="cursor-pointer"
                    onClick={handleCloseValijas}
                  />
                </DialogHeader>
              </div>
              <DialogBody className="text-base font-poppins font-normal text-black/70 overflow-y-auto max-h-[70vh]">
                <div className="flex justify-start flex-wrap gap-2 mb-4">
                  <div className="w-fit text-center text-base font-medium text-softPurple rounded-lg border-softPurple/40 bg-white/40 border py-1 px-2">
                    € 200
                  </div>
                  <div className="w-fit text-center text-base font-medium text-softPurple rounded-lg border-softPurple/40 bg-white/40 border py-1 px-2">
                    4 HS
                  </div>
                </div>
                <pre className="text-base font-poppins font-normal text-black/70 leading-relaxed">
                  {language === "es" ? (
                    <p className="text-softPurple">
                      No hay nada como viajar y disfrutar de esas vacaciones y
                      descanso tan esperado, pero el momento de las valijas
                      suele ser un dolor de cabeza para muchas. Como Asesora de
                      Imagen y Estilista hago que este momento pase a ser uno de
                      disfrute, armando una valija completamente funcional a tus
                      necesidades en el viaje, que te permita llevar lo
                      necesario, donde tengas alternativas de outfits variadas y
                      previamente pensadas.
                      <br />
                      <br />
                      De esta manera, evitas llevar ropa de más o de menos,
                      llevarás los outfits previamente armados para las
                      ocasiones de uso correspondientes y a lo largo de tu
                      estadía no perderás ni un minuto en pensar qué ponerte!
                      También te propongo que si vas a realizar un viaje de
                      trabajo o negocios pienses en este servicio para que cada
                      outfit que diseñemos esté pensado en tus objetivos, en
                      aquello que quieres proyectar, lo que buscas transmitir y
                      el mensaje que quieres dar.
                      <br />
                      <br />
                      ¡¡Alinear la comunicación no verbal con lo que buscas
                      expresar a través de tu imagen es fundamental para que el
                      mensaje llegue de manera correcta! Anímate a probar la
                      diferencia!!
                      <br />
                      <br />
                      El tiempo aproximado es de 4 horas. En caso de necesitar
                      más, debido a la cantidad de outfits que necesitas para el
                      viaje, existe la posibilidad de sumar horas extras.
                    </p>
                  ) : (
                    <p className="text-softPurple">
                      We all love travelling and enjoying that long-awaited
                      vacation and rest, but let's face it, the moment of the
                      suitcases is usually a bit of a headache for many of us.{" "}
                      <br />
                      <br />
                      As an image consultant and stylist, I make this moment
                      become one of enjoyment. I put together a suitcase
                      completely functional to your needs on the trip, allowing
                      you to take what you need, where you have alternatives of
                      varied and previously thought-out outfits. This way, you
                      can avoid taking too many or too few clothes. You'll take
                      the outfits you've prepared for the occasions you have
                      planned, and you won't waste a minute thinking about what
                      to wear! <br />
                      <br />I also suggest that if you're going on a business
                      trip, think about this service. Each outfit we design will
                      be thought about your objectives, what you want to
                      project, what you want to transmit, and the message you
                      want to give. It's so important to make sure that what
                      you're wearing aligns with the message you want to send.
                      After all, your clothes are a form of non-verbal
                      communication! So, if you're feeling unsure about what to
                      wear, why not give this a try? You'll be amazed at the
                      difference it makes! <br />
                      <br />
                      The session lasts around four hours, but if you need more
                      time, just let me know and I'll be happy to add extra
                      hours.
                    </p>
                  )}
                </pre>
              </DialogBody>
            </Dialog>
          </div>
        </div>

        {/* Card 6 - estilismo */}
        <div
          style={{ backgroundImage: `url(${estilismo})` }}
          className="min-h-[350px] bg-detox CardMaestra w-full bg-brown rounded-lg shadow flex flex-col items-center justify-center pb-10 pt-6 bg-cover bg-center relative"
        >
          <div className="absolute inset-0 bg-black rounded-lg bg-opacity-60"></div>
          <div className="relative w-[70%] text-center text-white text-3xl font-semibold font-['Playfair_Display'] mt-auto">
            {translations.services.styling.title}
          </div>
          <div className="relative w-[70%] mt-auto text-center text-white text-base font-['Poppins']">
            {translations.services.styling.description}
          </div>
          <div className="relative mt-auto">
            <Button
              className="px-4 py-2 text-base font-medium capitalize font-poppins bg-lightGrey text-softPurple"
              onClick={handleOpenEstilismo}
            >
              {language === "es" ? "Más info" : "More info"}
            </Button>
            <Dialog
              className="p-2 border-softPurple border-3 bg-lightGrey w-full overflow-hidden max-h-[90vh]"
              open={openEstilismo}
              handler={handleCloseEstilismo}
            >
              <div className="flex items-start justify-between">
                <DialogHeader className="flex items-center justify-between w-full text-2xl font-semibold text-white rounded-lg rounded-b-none font-poppins bg-softPurple">
                  {translations.services.styling.title}
                  <IoClose
                    className="cursor-pointer"
                    onClick={handleCloseEstilismo}
                  />
                </DialogHeader>
              </div>
              <DialogBody className="text-base font-poppins font-normal text-black/70 overflow-y-auto max-h-[70vh]">
                <div className="flex justify-start flex-wrap gap-2 mb-4">
                  <div className="w-fit text-center text-base font-medium text-softPurple rounded-lg border-softPurple/40 bg-white/40 border py-1 px-2">
                    {language == "es" ? <>Consultar info</> : <>Request info</>}
                  </div>
                </div>
                <pre className="text-base font-poppins font-normal text-black/70 leading-relaxed">
                  {language === "es" ? (
                    <p className="text-softPurple">
                      Cada propuesta de estilismo es un nuevo desafío para mí,
                      ¡y me encanta! Trabajo en la construcción de una imagen e
                      identidad basada en los objetivos y necesidades de cada
                      cliente para lograr el impacto deseado y proyectar la
                      imagen deseada. <br />
                      <br />
                      Como estilista, utilizo diferentes recursos y mis
                      conocimientos para hacer realidad las visiones de mis
                      clientes en desfiles de moda, editoriales, sesiones de
                      lanzamientos de temporada, y más.
                    </p>
                  ) : (
                    <p className="text-softPurple">
                      Each styling proposal is a new challenge for me, and I
                      love it! I work on the construction of an image and an
                      identity based on the objectives and needs of each client
                      to achieve the desired impact and project the desired
                      image.
                      <br />
                      <br />
                      As a stylist, I use different resources and my knowledge
                      to realise the visions of my clients in fashion shows,
                      editorials, shootings of season launches, and more.
                    </p>
                  )}
                </pre>
              </DialogBody>
            </Dialog>
          </div>
        </div>
      </div>

      {/* BIG CARD */}
      <div
        className="relative flex flex-col items-center px-8 pb-8 mt-8 bg-black bg-center bg-cover rounded-lg shadow bg-opacity-60 pt-14 lg:py-12 lg:px-12 lg:flex-row lg:items-end lg:justify-between"
        style={{ backgroundImage: `url(${big})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
        {/* Discount Badge */}
        <div className="absolute top-3 right-3 lg:top-8 lg:right-8 bg-lightGrey bg-opacity-30 rounded-lg border-[0.5px] border-stone-200 shadow px-3 py-1 lg:px-4 lg:py-2 z-30">
          <div className="text-center text-white text-sm lg:text-base font-['Poppins']">
            15% Off
          </div>
        </div>

        {/* Text */}
        <div className="relative lg:w-[60%]">
          <div className="w-full text-center lg:text-start text-white text-3xl md:text-4xl font-semibold font-['Playfair_Display']">
            <h2>{translations.services.bigCard.title}</h2>
          </div>
          <div className="w-full text-center lg:text-start mt-4 text-white text-base font-normal font-['Poppins']">
            {translations.services.bigCard.p}
          </div>
          <div className="w-full text-center lg:text-start mt-8 text-white text-3xl font-semibold font-['Playfair_Display']">
            {translations.services.bigCard.includes}
          </div>
          <ul className="w-full mt-4 text-center lg:text-start text-white text-base font-normal font-['Poppins']">
            <li className="list-disc list-inside py-[1px]">
              {translations.services.bigCard.list.color}
            </li>
            <li className="list-disc list-inside py-[1px]">
              {translations.services.bigCard.list.detox}
            </li>
            <li className="list-disc list-inside py-[1px]">
              {translations.services.bigCard.list.build}
            </li>
            <li className="list-disc list-inside py-[1px]">
              {translations.services.bigCard.list.personal}
            </li>
          </ul>
        </div>

        {/* CTA Button */}
        <div className="relative mt-8 rounded-lg shadow lg:mt-0">
          <a
            href="https://api.whatsapp.com/send?phone=5491164606306"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="px-5 py-3 text-base font-semibold capitalize font-poppins bg-lightGrey text-softPurple hover:shadow-softPurple/60">
              {translations.services.bigCard.cta}
            </Button>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
