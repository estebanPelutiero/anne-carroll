import React from "react";
import Layout from "./Layout";
import sobreMi from "../assets/sobreMi.jpg";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { useLanguage } from "../LanguageContext";

const About = () => {
  const { language } = useLanguage();
  return (
    <Layout id={"about"} className="pt-10 pb-10 lg:pb-20 lg:pt-0">
      <Card className="flex-col w-full shadow-sm lg:flex-row bg-white/20">
        <CardHeader
          shadow={false}
          floated={false}
          className="w-full m-0 rounded-b-none lg:w-2/5 shrink-0 lg:rounded-r-none lg:rounded-bl-xl"
        >
          <img
            src={sobreMi}
            alt="Anne Carroll | Imagen y Estilo"
            className="object-cover w-full h-full"
          />
        </CardHeader>
        <CardBody className="flex flex-col justify-center gap-3 lg:px-12">
          <Typography className="text-5xl font-bold text-start text-softPurple font-display mb-4 drop-shadow-sm">
            {language === "es" ? <div>Sobre Mí</div> : <div>About Me</div>}
          </Typography>
          <div className="font-normal font-poppins text-softPurple">
            {language === "es" ? (
              <div className="flex flex-col gap-4">
                <p>
                  Soy Anne Carroll, también conocida como Pachu, Asesora de
                  Imagen y Estilista de Moda, una mujer a quien le apasiona
                  descubrir a las personas a través de lo que comunican con su
                  imagen.{" "}
                </p>
                <p>
                  Me formé en el FIT de Nueva York (Fashion Institute of
                  Technology), una de las universidades más reconocidas en el
                  mundo de la moda que me dio la oportunidad de trabajar para el
                  Fashion Week de Nueva York.{" "}
                </p>
                <p>
                  Esto me permitió dedicarme a lo que tanto me apasiona
                  compartiendo mis conocimientos con clientas, marcas de moda y
                  diferentes empresas que confían en mí día a día.
                </p>
                <p>
                  Ambas certificaciones me permitieron encontrar un equilibrio
                  entre un trabajo más pautado, en mi rol de asesora de imagen y
                  la libertad infinita de crear y jugar con las prendas y
                  colores, como estilista.
                </p>
                <p>
                  Los cambios en nuestras vidas, cada etapa, cada ciclo cumplido
                  siempre están también acompañados por un cambio en nuestra
                  imagen. Aquello que buscamos transmitir va mutando, nos vamos
                  transformando, y muchas veces nuestra imagen ya no acompaña de
                  manera certera quienes somos en el presente.
                </p>
                <p>
                  Así como aprendí a descubrirme, potenciarme, y usar el poder
                  de la comunicación no verbal a mi favor en cada etapa, estoy
                  convencida que este es el camino que todas deberíamos
                  darnos la posibilidad de recorrer.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <p>
                  I'm Anne Carroll, also known as Pachu! I'm an image consultant
                  and fashion stylist, and I love helping people express
                  themselves through their style.
                </p>
                <p>
                  I trained at FIT in New York (Fashion Institute of
                  Technology), one of the most well-known fashion schools in the
                  world, which gave me the great opportunity to work at the New
                  York Fashion Week!
                </p>
                <p>
                  This was the perfect opportunity for me to dedicate myself to
                  what I am so passionate about: sharing my knowledge with
                  clients, fashion brands and different companies that trust me
                  every day.
                </p>
                <p>
                  Both certifications allowed me to find a balance between a
                  more scheduled work, in my role as image consultant, and the
                  infinite freedom to create and play with clothes and colours,
                  as a stylist.
                </p>
                <p>
                  Each stage in out lives, each completed cycle, are always
                  accompanied by a change in our image. As we go through life,
                  our needs and desires change, and so does our image. It's
                  natural! We're constantly evolving, and our image should
                  reflect that.
                </p>
                <p>
                  I've learned so much about myself and how to communicate
                  non-verbally. I'm so grateful for all the opportunities I've
                  had to grow and evolve. I truly believe that everyone should
                  have the chance to do the same.
                </p>
              </div>
            )}
          </div>
        </CardBody>
      </Card>
    </Layout>
  );
};

export default About;
