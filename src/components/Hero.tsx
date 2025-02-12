"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: 'url("https://i.imgur.com/EihN3ZV.jpg")',
          backgroundPosition: "50% 30%",
          transform: "scale(1.1)",
        }}
      />
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />
      <motion.div
        className="relative h-full flex flex-col items-center justify-center text-center text-white z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Nelson Taffarel</h1>
        <p className="text-xl md:text-2xl mb-8">Actor • Comediante • Locutor</p>
        <Button
          className="bg-purple-600 hover:bg-purple-700 text-white"
          onClick={() => {
            document
              .querySelector("#biografia")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Conóceme
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;
