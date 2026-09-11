"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  ExternalLink,
  Calendar,
  Shield,
  X,
  Eye,
  CheckCircle2,
  Lock,
  ShieldAlert,
  FileText,
  Sparkles,
} from "lucide-react";
import SectionBackground from "./ui/SectionBackground";
import SectionHeader from "./ui/SectionHeader";
import Card from "./ui/Card";
import { CertificateItem, CertificatesData } from "@/types/portfolio";
import { portfolioData } from "@/data/portfolio";

interface CertificatesProps {
  data?: CertificatesData;
}

export default function Certificates({
  data = portfolioData.certificates,
}: CertificatesProps) {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [isWindowBlurred, setIsWindowBlurred] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const {
    badge = "Credentials",
    title = "Certificates.",
    description = "Professional certifications and credentials that validate my expertise.",
    items = [],
  } = data;

  // Proteksi Privasi saat modal aktif
  useEffect(() => {
    if (!selectedCert) return;

    // 1. Jika pengguna beralih window/membuka Snipping Tool/Screen Recorder, blur gambar otomatis
    const handleBlur = () => setIsWindowBlurred(true);
    const handleFocus = () => setIsWindowBlurred(false);

    // 2. Deteksi shortcut PrintScreen, DevTools, Ctrl+S, Ctrl+P
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "PrintScreen" || e.keyCode === 44) {
        setIsWindowBlurred(true);
        setShowWarning(true);
        navigator.clipboard?.writeText("").catch(() => {});
        setTimeout(() => setShowWarning(false), 3000);
      }

      if (
        (e.ctrlKey && (e.key === "p" || e.key === "s" || e.key === "u")) ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "i" || e.key === "C" || e.key === "c")) ||
        e.key === "F12"
      ) {
        e.preventDefault();
        setShowWarning(true);
        setTimeout(() => setShowWarning(false), 3000);
      }
    };

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("keydown", handleKeyDown);
      setIsWindowBlurred(false);
      setShowWarning(false);
    };
  }, [selectedCert]);

  return (
    <>
      <section
        id="certificates"
        className="relative overflow-hidden px-6 py-32 text-white"
      >
        <SectionBackground glowPosition="right" />

        <div className="relative mx-auto max-w-7xl">
          <SectionHeader
            badge={badge}
            badgeIcon={Award}
            title={title}
            description={description}
          />

          {/* Certificates Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((cert, index) => (
              <motion.div
                key={cert.credentialId || cert.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group cursor-pointer"
                onClick={() => setSelectedCert(cert)}
              >
                <Card
                  withTopLine
                  className="relative flex h-full flex-col justify-between p-6 transition-all duration-300 hover:border-purple-500/40 hover:bg-white/[0.04] group-hover:-translate-y-1"
                >
                  <div>
                    {/* Issuer Badge & Date */}
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-colors group-hover:border-purple-500/30 group-hover:bg-purple-500/10">
                          {cert.issuerLogo ? (
                            <img
                              src={cert.issuerLogo}
                              alt={cert.issuer}
                              className="h-6 w-6 object-contain"
                            />
                          ) : (
                            <Shield size={20} className="text-purple-400" />
                          )}
                        </div>
                        <span className="text-sm font-medium text-zinc-300">
                          {cert.issuer}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                        <Calendar size={12} />
                        {cert.date}
                      </div>
                    </div>

                    {/* Image Thumbnail Preview */}
                    {cert.image && (
                      <div className="relative mb-4 aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-black/40">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          draggable={false}
                          onContextMenu={(e) => e.preventDefault()}
                          className="h-full w-full select-none object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                          <span className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white shadow-lg backdrop-blur-md">
                            <Eye size={14} />
                            Lihat Detail & Foto
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Title */}
                    <h3 className="mb-2 text-lg font-semibold leading-snug text-white transition-colors group-hover:text-purple-300">
                      {cert.title}
                    </h3>

                    {/* Description preview */}
                    {cert.description && (
                      <p className="mb-4 text-sm leading-relaxed text-zinc-400 line-clamp-2">
                        {cert.description}
                      </p>
                    )}

                    {/* Skills Tags */}
                    {cert.skills && cert.skills.length > 0 && (
                      <div className="mb-4 flex flex-wrap gap-1.5">
                        {cert.skills.slice(0, 4).map((skill) => (
                          <span
                            key={skill}
                            className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-xs text-zinc-400"
                          >
                            {skill}
                          </span>
                        ))}
                        {cert.skills.length > 4 && (
                          <span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-xs text-zinc-500">
                            +{cert.skills.length - 4}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Bottom Bar / Button */}
                  <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                    {cert.credentialId ? (
                      <span className="text-xs text-zinc-500">
                        ID: <span className="font-mono text-zinc-400">{cert.credentialId}</span>
                      </span>
                    ) : (
                      <span className="text-xs text-emerald-400/90 flex items-center gap-1">
                        <CheckCircle2 size={12} /> Verified
                      </span>
                    )}

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCert(cert);
                      }}
                      className="flex items-center gap-1.5 rounded-lg border border-purple-500/30 bg-purple-500/10 px-3 py-1.5 text-xs font-medium text-purple-300 transition-all duration-200 hover:border-purple-500/50 hover:bg-purple-500/20 hover:text-white"
                    >
                      <Eye size={13} />
                      Lihat Detail
                    </button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Photo Lightbox & Full Details Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex select-none items-center justify-center bg-black/90 p-3 sm:p-5 backdrop-blur-md"
            onContextMenu={(e) => e.preventDefault()}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 320 }}
              className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/15 bg-zinc-950 p-5 sm:p-7 shadow-2xl custom-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Privacy Warning Toast */}
              <AnimatePresence>
                {showWarning && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute left-1/2 top-4 z-50 -translate-x-1/2 flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/20 px-4 py-2 text-xs font-medium text-amber-200 shadow-xl backdrop-blur-lg"
                  >
                    <ShieldAlert size={16} className="text-amber-400" />
                    <span>Tangkapan layar / aksi dilarang untuk melindungi dokumen.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                aria-label="Tutup modal"
                className="absolute right-4 top-4 z-30 rounded-full border border-white/10 bg-zinc-900/80 p-2 text-zinc-400 backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/10 hover:text-white"
              >
                <X size={18} />
              </button>

              {/* Header Title & Issuer Info */}
              <div className="mb-5 pr-10">
                <div className="mb-2 flex flex-wrap items-center gap-2 text-xs">
                  <span className="flex items-center gap-1.5 rounded-md border border-purple-500/30 bg-purple-500/10 px-2.5 py-1 font-medium text-purple-300">
                    <Lock size={12} />
                    Protected Document
                  </span>
                  <span className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-zinc-400">
                    {selectedCert.issuer}
                  </span>
                  <span className="flex items-center gap-1 text-zinc-500">
                    <Calendar size={12} />
                    {selectedCert.date}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  {selectedCert.title}
                </h2>
              </div>

              {/* Certificate Protected Image Area */}
              <div
                className="relative mb-6 flex max-h-[50vh] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/80 p-2 select-none"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              >
                {/* Transparent Click/Drag Shield Overlay */}
                <div
                  className="absolute inset-0 z-20 cursor-default select-none pointer-events-auto"
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                />

                {/* Diagonal Repeating Watermark Overlay */}
                <div className="pointer-events-none absolute inset-0 z-10 flex select-none flex-wrap items-center justify-around overflow-hidden opacity-[0.08]">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <span
                      key={i}
                      className="-rotate-45 select-none font-mono text-xs font-black tracking-widest text-white uppercase whitespace-nowrap m-4"
                    >
                      CONFIDENTIAL • PREVIEW ONLY • DO NOT COPY
                    </span>
                  ))}
                </div>

                {/* Focus-Loss Obfuscation */}
                {selectedCert.image ? (
                  <div
                    className={`relative w-full flex justify-center transition-all duration-300 ${
                      isWindowBlurred ? "filter blur-2xl opacity-10 scale-95" : "filter-none opacity-100"
                    }`}
                  >
                    <img
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      draggable={false}
                      onContextMenu={(e) => e.preventDefault()}
                      className="max-h-[46vh] w-auto max-w-full rounded-lg object-contain shadow-md select-none pointer-events-none user-select-none"
                      style={{
                        WebkitUserSelect: "none",
                        userSelect: "none",
                      }}
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-16 text-center text-zinc-500">
                    <Award size={48} className="mb-3 text-purple-400/60" />
                    <p className="text-sm font-medium text-zinc-300">
                      Preview Gambar Sertifikat
                    </p>
                    <p className="mt-1 text-xs text-zinc-500">
                      (Tambahkan path file foto sertifikat pada properti `image` di data JSON)
                    </p>
                  </div>
                )}

                {/* Blur Active Notice */}
                {isWindowBlurred && (
                  <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/80 backdrop-blur-xl text-center p-4">
                    <Lock size={32} className="text-purple-400 mb-2" />
                    <p className="text-sm font-semibold text-white">Pratinjau Dokumen Terkunci</p>
                    <p className="text-xs text-zinc-400 mt-1 max-w-xs">
                      Fokus layar beralih atau aplikasi perekam/tangkapan layar terdeteksi.
                    </p>
                  </div>
                )}
              </div>

              {/* Full Details & Description Section */}
              <div className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
                {/* Description */}
                {selectedCert.description && (
                  <div>
                    <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400">
                      <FileText size={14} />
                      <span>Deskripsi & Ruang Lingkup Kompetensi</span>
                    </div>
                    <p className="text-sm sm:text-base leading-relaxed text-zinc-300">
                      {selectedCert.description}
                    </p>
                  </div>
                )}

                {/* Skills Acquired */}
                {selectedCert.skills && selectedCert.skills.length > 0 && (
                  <div className="border-t border-white/10 pt-4">
                    <div className="mb-2.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      <Sparkles size={14} className="text-purple-400" />
                      <span>Kompetensi / Keterampilan yang Divalidasi</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedCert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Credential ID & External Verify Button */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-white/10 pt-4">
                  <div className="text-xs text-zinc-400">
                    {selectedCert.credentialId ? (
                      <span>
                        Credential ID:{" "}
                        <span className="font-mono font-medium text-white">{selectedCert.credentialId}</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-emerald-400">
                        <CheckCircle2 size={14} />
                        Sertifikasi Resmi Terverifikasi
                      </span>
                    )}
                  </div>

                  {selectedCert.credentialUrl && (
                    <a
                      href={selectedCert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2.5 text-xs font-semibold text-white shadow-lg transition-all hover:from-purple-500 hover:to-indigo-500 hover:shadow-purple-500/25"
                    >
                      <ExternalLink size={14} />
                      Verifikasi Kredensial Resmi
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
