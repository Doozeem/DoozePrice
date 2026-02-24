import { motion } from "framer-motion";
import { createWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/whatsapp";

export default function HeroSection() {
  const heroWhatsAppLink = createWhatsAppLink(
    `${DEFAULT_WHATSAPP_MESSAGE} Saya datang dari tombol Hero Section.`
  );

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-navy-dark overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
        background: "radial-gradient(ellipse 60% 50% at 50% 0%, hsla(43,96%,56%,0.12), transparent)"
      }} />

      <div className="max-w-container mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-gold font-semibold text-sm tracking-wider uppercase mb-4"
        >
          Dooze Project Web Solutions
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-tight max-w-3xl mx-auto mb-6"
          style={{ color: "hsl(0, 0%, 100%)" }}
        >
          Digitalisasi Warung Kopi & Rumah Makan Anda{" "}
          <span className="text-gradient-gold">Hari Ini.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "hsla(0, 0%, 100%, 0.7)" }}
        >
          Tingkatkan pesanan, kurangi antrean, dan buat bisnis kuliner Anda tampil lebih profesional
          dengan sistem pemesanan digital otomatis. Pilih paket yang sesuai dengan kebutuhan Anda.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#pricing"
            className="bg-gold text-accent-foreground px-8 py-4 rounded-xl font-bold text-base hover:brightness-110 transition-all shadow-lg"
          >
            Lihat Paket & Harga
          </a>
          <a
            href={heroWhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 px-8 py-4 rounded-xl font-semibold text-base transition-all hover:bg-primary-foreground/10"
            style={{ borderColor: "hsla(0,0%,100%,0.25)", color: "hsl(0,0%,100%)" }}
          >
            Konsultasi Gratis
          </a>
        </motion.div>
      </div>
    </section>
  );
}
