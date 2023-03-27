"use client";

import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";


export default function Container({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  useEffect(() => {
    
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <div className={`${isOpen ? "fixed" : "relative"}`}>
      <Header open={open} close={close} isOpen={isOpen} />
      <Toaster />
      {children}
      <Footer />
    </div>
  );
}
