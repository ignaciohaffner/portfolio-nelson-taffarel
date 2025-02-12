import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Biography = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const bioItems = [
    {
      icon: "🎭",
      title: "Sobre mí",
      content: (
        <>
          Actor formado en el prestigioso taller de arte dramático de{" "}
          <span className="font-semibold">Agustín Alezzo</span>, con una
          profunda pasión por la interpretación. Además, perfeccioné mis
          habilidades en danza y actuación con{" "}
          <span className="font-semibold">Ana Frenkel</span>. Apasionado por el
          deporte, practico <strong>equitación</strong>, <strong>rugby</strong>,{" "}
          <strong>golf</strong> y <strong>Ashtanga Yoga</strong>, fusionando
          arte y disciplina en cada paso.
        </>
      ),
    },
    {
      icon: "📺",
      title: "Experiencia en TV",
      content: (
        <>
          He participado en reconocidas producciones televisivas como{" "}
          <em>Amor mío</em>, <em>Conflictos en red</em>, <em>Sin código</em>,{" "}
          <em>Hombres de honor</em>, <em>Los Roldán</em>, <em>Alma pirata</em>,{" "}
          <em>Casi ángeles</em> y <em>RRDT</em>. También incursioné en la
          comedia con programas icónicos como <em>Casados con hijos</em>,{" "}
          <em>TyC Sports</em> y <em>VideoMatch</em> (1995-1997).
        </>
      ),
    },
    {
      icon: "🎬",
      title: "Teatro",
      content: (
        <>
          Sobre las tablas, he llevado a escena grandes clásicos en teatros como
          el <strong>San Martín</strong> y <strong>El Duende</strong>. Obras de{" "}
          <strong>Woody Allen</strong>, <strong>Harold Pinter</strong> y{" "}
          <strong>El Reñidero</strong> han sido parte de mi trayectoria, siempre
          bajo la dirección del maestro <strong>Agustín Alezzo</strong>.
        </>
      ),
    },
    {
      icon: "🎥",
      title: "Publicidad & Videoclips",
      content: (
        <>
          He sido parte de campañas publicitarias para marcas líderes como{" "}
          <strong>La Serenísima</strong>, <strong>Arcor</strong>,{" "}
          <strong>Gancia</strong>, <strong>AFIP</strong>,{" "}
          <strong>Plusbelle</strong>, <strong>Ford</strong> y{" "}
          <strong>Pago Fácil</strong>. Además, participé en videoclips de
          artistas como <strong>Los Nocheros</strong>,{" "}
          <strong>Pimpinela</strong> y <strong>León Gieco</strong>, fusionando
          la actuación con la música.
        </>
      ),
    },
  ];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + newDirection + bioItems.length) % bioItems.length
    );
  };

  return (
    <section id="biografia" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-purple-600 dark:text-purple-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Biografía
        </motion.h2>

        <div className="relative h-[280px] sm:h-[350px] max-w-3xl mx-auto">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full"
            >
              <div className="bg-gray-100 dark:bg-gray-800 p-3 sm:p-4 md:p-8 rounded-lg shadow-xl">
                <div className="text-3xl sm:text-4xl md:text-6xl mb-2 sm:mb-4 md:mb-6">
                  {bioItems[currentIndex].icon}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-4 md:mb-6 text-purple-600 dark:text-purple-400">
                  {bioItems[currentIndex].title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {bioItems[currentIndex].content}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="absolute left-0 right-0 top-[-45px] sm:top-[-60px] flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => paginate(-1)}
              className="rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              {bioItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex
                      ? "bg-purple-600 dark:bg-purple-400"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={() => paginate(1)}
              className="rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
