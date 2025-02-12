import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
  const images = [
    "https://i.imgur.com/XtILJWD.jpg",
    "https://i.imgur.com/bUHuzkA.jpg",
    "https://i.imgur.com/jV7CFz6.jpg",
    "https://i.imgur.com/lpWlmwp.jpg",
    "https://i.imgur.com/esqioYK.png",
    "https://i.imgur.com/jhHE9cL.jpg",
    "https://i.imgur.com/4vhjeIq.jpg",
    "https://i.imgur.com/mo2VXE0.jpg",
    "https://i.imgur.com/9NUBeyp.png",
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-purple-600 dark:text-purple-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Galería
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img || "/placeholder.svg"}
                alt={`Nelson Taffarel ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg cursor-pointer"
              />
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Selected image"
              className="max-w-full max-h-full object-contain"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
