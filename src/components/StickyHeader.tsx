import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { createWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/whatsapp";

export default function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [showLogoImage, setShowLogoImage] = useState(true);
  const headerWhatsAppLink = createWhatsAppLink(
    `${DEFAULT_WHATSAPP_MESSAGE} Saya datang dari tombol Header.`
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-[72px]">
        <a href="#" className="flex items-center gap-2.5">
          {showLogoImage ? (
            <img
              src="/logo-dooze.svg"
              alt="Logo Dooze Project"
              className="w-9 h-9 object-contain"
              onError={() => setShowLogoImage(false)}
            />
          ) : (
            <div className="w-9 h-9 rounded-lg bg-navy flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm font-display">D</span>
            </div>
          )}
          <span className="font-display font-bold text-foreground text-sm sm:text-base">
            Dooze Project
          </span>
        </a>

        <a
          href={headerWhatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Konsultasi WA
        </a>
      </div>
    </motion.header>
  );
}
