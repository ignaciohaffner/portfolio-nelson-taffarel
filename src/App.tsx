import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Biography from "./components/Biography";
import Gallery from "./components/Gallery";
import Reels from "./components/Reels";
import Contact from "./components/Contact";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("darkMode", (!darkMode).toString());
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="min-h-screen bg-white dark:bg-gray-900">
        <Header toggleDarkMode={toggleDarkMode} />
        <Hero />
        <Biography />
        <Gallery />
        <Reels />
        <Contact />
      </main>
    </div>
  );
}
