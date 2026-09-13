"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/constants";

const message = encodeURIComponent(
  `Hi ${siteConfig.shortName}! I'd like a free quote for commercial cleaning.`
);

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${siteConfig.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${siteConfig.shortName} on WhatsApp`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glow"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/50"
      />
      <svg
        viewBox="0 0 32 32"
        className="relative h-7 w-7"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.34.664 4.523 1.812 6.375L4 29l7.813-1.75A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75c-1.98 0-3.82-.55-5.395-1.5l-.387-.23-4.633 1.04 1.023-4.51-.25-.402A9.71 9.71 0 0 1 6.25 15c0-5.386 4.375-9.75 9.754-9.75 5.379 0 9.746 4.364 9.746 9.75 0 5.386-4.367 9.75-9.746 9.75Zm5.348-7.297c-.293-.148-1.734-.855-2.004-.953-.27-.098-.465-.148-.66.149-.195.297-.758.953-.93 1.148-.172.196-.343.22-.636.075-.293-.149-1.238-.457-2.36-1.457-.872-.777-1.461-1.738-1.633-2.035-.172-.297-.019-.457.129-.605.132-.132.293-.344.44-.516.148-.172.196-.297.293-.496.098-.199.05-.371-.024-.52-.074-.148-.66-1.594-.906-2.183-.238-.575-.48-.497-.66-.507l-.562-.01c-.196 0-.512.075-.78.371-.27.297-1.028 1.008-1.028 2.457s1.052 2.848 1.199 3.047c.148.199 2.07 3.164 5.016 4.437.7.302 1.246.483 1.672.618.703.223 1.343.191 1.848.116.563-.084 1.734-.71 1.98-1.394.243-.684.243-1.27.172-1.395-.07-.125-.266-.199-.559-.348Z" />
      </svg>
    </motion.a>
  );
}
