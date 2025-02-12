import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Reels = () => {
  const reels = [
    { title: "REEL 1", url: "https://www.youtube.com/embed/KCo6z-yXb60" },
    { title: "REEL 2", url: "https://www.youtube.com/embed/OBYoz-8YC3s" },
    { title: "REEL 3", url: "https://www.youtube.com/embed/QIl6qiG8fpA" },
    { title: "REEL 4", url: "https://www.youtube.com/embed/V2-pi55aP7g" },
    { title: "REEL AUDIO", url: "https://www.youtube.com/embed/V2-pi55aP7g" },
  ];

  const [activeReel, setActiveReel] = useState(reels[0]);

  return (
    <section id="reels" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-purple-600 dark:text-purple-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Reels
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
          <div className="md:w-1/4">
            <div className="flex flex-col gap-2">
              {reels.map((reel) => (
                <Button
                  key={reel.title}
                  onClick={() => setActiveReel(reel)}
                  variant={
                    activeReel.title === reel.title ? "default" : "outline"
                  }
                  className={`w-full justify-center text-lg py-6 ${
                    activeReel.title === reel.title
                      ? "bg-purple-600 hover:bg-purple-700 text-white"
                      : "hover:bg-purple-100 dark:hover:bg-purple-900"
                  }`}
                >
                  {reel.title}
                </Button>
              ))}
            </div>
          </div>
          <div className="md:w-3/4">
            <div className="relative pt-[56.25%] w-full">
              <iframe
                src={activeReel.url}
                title={activeReel.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reels;
