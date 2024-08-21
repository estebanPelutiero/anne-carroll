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
            {language === "es" ? (
              <div>
                Sobre Mí
              </div>
            ) : <div>
              About Me
            </div>}

          </Typography>
          <div className="font-normal font-poppins text-softPurple">
            {language === "es" ? (
              <div className="flex flex-col gap-4">
                <p>
                  Soy Anne Carroll, también conocida como Pachu, Asesora de Imagen y Estilista de Moda, una mujer a quien le apasiona descubrir a las personas a través de lo que comunican con su imagen. {" "}
                </p>
                <p>
                  Me formé en el FIT de Nueva York (Fashion Institute of Technology), una de las universidades más reconocidas en el mundo de la moda que me dio la oportunidad de trabajar para el Fashion Week de Nueva York.
                  Esto me permitió dedicarme a lo que tanto me apasiona compartiendo mis conocimientos con clientas, marcas de moda y diferentes empresas que confían en mí día a día.
                  {" "}
                </p>
                <p>
                  Ambas certificaciones me permitieron encontrar un equilibrio entre un trabajo más pautado, en mi rol de asesora de imagen y la libertad infinita de crear y jugar con las prendas y colores, como estilista.
                </p>
                <p>
                  Los cambios en nuestras vidas, cada etapa, cada ciclo cumplido siempre están también acompañados por un cambio en nuestra imagen. Aquello que buscamos transmitir va mutando, nos vamos transformando, y muchas veces nuestra imagen ya no acompaña de manera certera quienes somos en el presente. Así como aprendí a descubrirme, potenciarme, y usar el poder de la comunicación no verbal a mi favor en cada etapa, estoy convencida de que este es el camino que todas deberíamos darnos la posibilidad de recorrer.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <p>
                  I'm Anne Carroll, also known as Pachu, Image Consultant and
                  Fashion Stylist. A woman who is passionate about discovering
                  people through what they communicate with their image.
                </p>
                <p>
                  I trained at FIT in New York (Fashion Institute of
                  Technology), one of the most renowned universities in the
                  fashion world, which gave me the opportunity to work for New
                  York Fashion Week.
                </p>
                <p>
                  This allowed me to dedicate myself to what I am passionate
                  about, sharing my knowledge with clients, fashion brands, and
                  different companies that trust me day by day. Both
                  certifications allowed me to find a balance between a more
                  structured job as an image consultant and the infinite freedom
                  to create and play with garments and colors as a stylist.
                </p>
                <p>
                  Just as I learned to discover myself, empower myself, and use
                  the power of non-verbal communication to my advantage at every
                  stage, I am convinced that this is the path we should all give
                  ourselves the opportunity to walk.
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
