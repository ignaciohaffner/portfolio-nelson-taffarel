import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";

interface HeaderProps {
  toggleDarkMode: () => void;
}

const Header = ({ toggleDarkMode }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "Inicio", href: "#home" },
    { title: "Biografía", href: "#biografia" },
    { title: "Galería", href: "#galeria" },
    { title: "Reels", href: "#reels" },
    { title: "Contacto", href: "#contacto" },
  ];

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <header className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <motion.h1
            className="text-2xl font-bold text-purple-600 dark:text-purple-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Nelson Taffarel
          </motion.h1>
          <div className="hidden md:flex items-center space-x-4">
            {menuItems.map((item) => (
              <Button
                key={item.title}
                variant="ghost"
                className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300"
                onClick={() => scrollToSection(item.href)}
              >
                {item.title}
              </Button>
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={toggleDarkMode}
              className="ml-2"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
          <div className="md:hidden flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={toggleDarkMode}>
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button variant="ghost" onClick={() => setIsOpen(true)}>
              <Menu />
            </Button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 p-6 shadow-lg z-50"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-purple-600 dark:text-purple-400">
                  Menú
                </h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <div className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <Button
                    key={item.title}
                    variant="ghost"
                    className="w-full justify-start text-lg text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300"
                    onClick={() => scrollToSection(item.href)}
                  >
                    {item.title}
                  </Button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
