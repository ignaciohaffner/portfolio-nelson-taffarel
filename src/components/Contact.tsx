import { motion } from "framer-motion";
import { Instagram, VideoIcon as Vimeo } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-purple-600 dark:text-purple-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contacto
        </motion.h2>
        <div className="flex justify-center space-x-6 mb-12">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="outline"
              size="lg"
              className="bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"
              asChild
            >
              <a
                href="https://www.instagram.com/neltaffarel/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Instagram className="h-6 w-6" />
                <span className="text-gray-900 dark:text-gray-100">
                  Instagram
                </span>
              </a>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="outline"
              size="lg"
              className="bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"
              asChild
            >
              <a
                href="https://vimeo.com/nelsontaffarel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Vimeo className="h-6 w-6" />
                <span className="text-gray-900 dark:text-gray-100">Vimeo</span>
              </a>
            </Button>
          </motion.div>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Hecho por{" "}
          <a
            href="http://www.linkedin.com/in/ignacio-haffner-3965b017a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 dark:text-purple-400 hover:underline"
          >
            IGNACIO HAFFNER
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
