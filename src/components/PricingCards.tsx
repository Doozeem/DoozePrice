import { motion } from "framer-motion";
import { createWhatsAppLink } from "@/lib/whatsapp";

const CheckIcon = () => (
  <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const plans = [
  {
    name: "Starter",
    price: "349.000",
    desc: "Cocok untuk warung kopi & rumah makan yang baru mulai go digital.",
    features: [
      "Website 1 halaman (Landing Page)",
      "Menu digital responsif",
      "Integrasi WhatsApp Order",
      "Desain profesional & mobile-friendly",
      "QR Code untuk meja / offline",
      "Revisi 1×",
    ],
    popular: false,
  },
  {
    name: "Pro Business",
    price: "699.000",
    desc: "Paket terlengkap untuk bisnis kuliner yang ingin tampil maksimal.",
    features: [
      "Semua fitur Starter",
      "Website multi-halaman (3–5 halaman)",
      "Galeri foto menu dengan kategori",
      "Formulir reservasi / pre-order",
      "Google Maps & jam operasional",
      "SEO dasar agar mudah ditemukan",
      "Revisi 3×",
      "Free domain .com (1 tahun)*",
    ],
    popular: true,
  },
  {
    name: "Spesial Ramadhan",
    price: "999.000",
    desc: "Paket eksklusif dengan fitur premium & bonus spesial bulan Ramadhan.",
    features: [
      "Semua fitur Pro Business",
      "Sistem pemesanan online lengkap",
      "Halaman promo & menu Ramadhan khusus",
      "Banner & pop-up promosi otomatis",
      "Integrasi media sosial",
      "Prioritas support 7 hari",
      "Revisi unlimited (1 bulan)",
      "Free hosting 1 tahun",
    ],
    popular: false,
  },
];

export default function PricingCards() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-background">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-3">
            Pilih Paket Anda
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Semua paket bersifat <strong>bayar sekali (Jual Putus)</strong> — tanpa biaya bulanan.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 flex flex-col transition-shadow duration-300 ${
                plan.popular
                  ? "bg-navy text-primary-foreground shadow-pro scale-[1.03] md:scale-105 z-10 border-2 border-gold"
                  : "bg-card shadow-card hover:shadow-card-hover border border-border"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-accent-foreground text-xs font-bold px-4 py-1.5 rounded-full tracking-wide uppercase shadow-md">
                  ⭐ Paling Laris
                </span>
              )}

              <h3
                className={`font-display text-xl font-bold mb-1 ${
                  plan.popular ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm mb-5 ${
                  plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"
                }`}
              >
                {plan.desc}
              </p>

              <div className="mb-6">
                <span
                  className={`text-sm font-medium ${
                    plan.popular ? "text-primary-foreground/60" : "text-muted-foreground"
                  }`}
                >
                  Rp
                </span>
                <span
                  className={`text-4xl font-extrabold font-display ml-1 ${
                    plan.popular ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-sm ml-1 ${
                    plan.popular ? "text-primary-foreground/60" : "text-muted-foreground"
                  }`}
                >
                  / sekali bayar
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    {plan.popular ? (
                      <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <CheckIcon />
                    )}
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={createWhatsAppLink(
                  `Halo Dooze Project, saya tertarik paket ${plan.name}. Mohon info detail dan konsultasi lanjut.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  plan.popular
                    ? "bg-gold text-accent-foreground hover:brightness-110 shadow-md"
                    : "bg-primary text-primary-foreground hover:opacity-90"
                }`}
              >
                Pilih Paket Ini
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
