import { motion } from "framer-motion";

const faqs = [
  {
    q: "Apakah ada biaya bulanan?",
    a: "Tidak, ini adalah sistem bayar sekali di awal (Jual Putus). Website menjadi milik Anda sepenuhnya.",
  },
  {
    q: "Berapa lama proses pembuatannya?",
    a: "Hanya 2–3 hari kerja setelah materi (foto & menu) kami terima.",
  },
  {
    q: "Apakah bisa update menu atau konten setelah website jadi?",
    a: "Ya, kami juga menyediakan jasa update dan pengelolaan konten website (menu, harga, promo, banner). Anda bisa request kapan saja melalui WhatsApp, dan kami akan bantu perbarui dengan cepat.",
  },
  {
    q: "Apakah website bisa diakses lewat HP?",
    a: "Tentu! Semua website yang kami buat sudah responsif dan tampil sempurna di smartphone, tablet, maupun laptop.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-surface-alt">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-3">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-muted-foreground text-lg">
            Jawaban untuk hal-hal yang paling sering ditanyakan klien kami.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <motion.details
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group bg-card rounded-xl border border-border shadow-card overflow-hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-left font-semibold text-foreground hover:bg-muted/50 transition-colors">
                <span>{faq.q}</span>
                <svg
                  className="w-5 h-5 text-muted-foreground flex-shrink-0 ml-4 transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-5 text-muted-foreground leading-relaxed text-sm">
                {faq.a}
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
