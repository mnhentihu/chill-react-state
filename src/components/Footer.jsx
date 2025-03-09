import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { NavLink } from "react-router";

function Footer() {
  // State untuk mengontrol accordion yang terbuka
  const [openAccordion, setOpenAccordion] = useState(null);

  // Fungsi untuk toggle accordion
  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <footer className="flex justify-center border-t py-8 sm:py-12 text-white">
      <div className="w-11/12 flex justify-between flex-col sm:flex-row">
        {/* Bagian Logo dan Copyright */}
        <div className="flex flex-col justify-center gap-y-4 sm:gap-y-0 mb-10 sm:mb-0">
          <img src="/logos/Logo Chill.png" alt="" className="h-9 w-fit" />
          <p className="text-sm font-light">@2024 Chill All Rights Reserved.</p>
        </div>

        {/* Accordion: Genre (Mobile) */}
        <div className="block sm:hidden">
          <button
            className="w-full text-left py-2 flex justify-between items-center focus:outline-none"
            onClick={() => toggleAccordion("genre")}
          >
            <span className="text-normal font-medium">Genre</span>
            <Icon
              icon="ri:arrow-right-s-line"
              width="24"
              height="24"
              className={`iconify transform transition-transform ${
                openAccordion === "genre" ? "rotate-90" : ""
              }`}
            />
          </button>

          <div
            className={`pl-4 transition-all duration-300 ${
              openAccordion === "genre" ? "block" : "hidden"
            }`}
          >
            <div className="flex gap-6">
              <div className="text-sm font-light flex flex-col gap-3">
                <NavLink>Aksi</NavLink>
                <NavLink>Anak-anak</NavLink>
                <NavLink>Anime</NavLink>
                <NavLink>Britania</NavLink>
              </div>
              <div className="text-sm font-light flex flex-col gap-3">
                <NavLink>Drama</NavLink>
                <NavLink>Fantasi Ilmiah & fantasi</NavLink>
                <NavLink>Kejahatan</NavLink>
                <NavLink>KDrama</NavLink>
              </div>
              <div className="text-sm font-light flex flex-col gap-3">
                <NavLink>Komedi</NavLink>
                <NavLink>Petualangan</NavLink>
                <NavLink>Perang</NavLink>
                <NavLink>Romantis</NavLink>
              </div>
              <div className="text-sm font-light flex flex-col gap-3">
                <NavLink>Sains & Alam</NavLink>
                <NavLink>Thriller</NavLink>
              </div>
            </div>
          </div>
        </div>

        {/* Genre (Desktop) */}
        <div className="genre hidden sm:flex flex-col gap-3">
          <h1 className="text-normal font-medium">Genre</h1>
          <div className="flex gap-6">
            <div className="text-sm font-light flex flex-col gap-3">
              <NavLink>Aksi</NavLink>
              <NavLink>Anak-anak</NavLink>
              <NavLink>Anime</NavLink>
              <NavLink>Britania</NavLink>
            </div>
            <div className="text-sm font-light flex flex-col gap-3">
              <NavLink>Drama</NavLink>
              <NavLink>Fantasi Ilmiah & fantasi</NavLink>
              <NavLink>Kejahatan</NavLink>
              <NavLink>KDrama</NavLink>
            </div>
            <div className="text-sm font-light flex flex-col gap-3">
              <NavLink>Komedi</NavLink>
              <NavLink>Petualangan</NavLink>
              <NavLink>Perang</NavLink>
              <NavLink>Romantis</NavLink>
            </div>
            <div className="text-sm font-light flex flex-col gap-3">
              <NavLink>Sains & Alam</NavLink>
              <NavLink>Thriller</NavLink>
            </div>
          </div>
        </div>

        {/* Accordion: Bantuan (Mobile) */}
        <div className="block sm:hidden">
          <button
            className="w-full text-left py-2 flex justify-between items-center focus:outline-none"
            onClick={() => toggleAccordion("bantuan")}
          >
            <span className="text-normal font-medium">Bantuan</span>
            <Icon
              icon="ri:arrow-right-s-line"
              width="24"
              height="24"
              className={`iconify transform transition-transform ${
                openAccordion === "bantuan" ? "rotate-90" : ""
              }`}
            />
          </button>

          <div
            className={`pl-4 transition-all duration-300 ${
              openAccordion === "bantuan" ? "block" : "hidden"
            }`}
          >
            <div className="text-sm font-light flex flex-col gap-3">
              <NavLink href="#">FAQ</NavLink>
              <NavLink href="#">Kontak Kami</NavLink>
              <NavLink href="#">Privasi</NavLink>
              <NavLink href="#">Syarat & Ketentuan</NavLink>
            </div>
          </div>
        </div>

        {/* Bantuan (Desktop) */}
        <div className="bantuan hidden sm:flex flex-col gap-3">
          <h1 className="text-normal font-medium">Bantuan</h1>
          <div className="text-sm font-light flex flex-col gap-3">
            <NavLink href="#">FAQ</NavLink>
            <NavLink href="#">Kontak Kami</NavLink>
            <NavLink href="#">Privasi</NavLink>
            <NavLink href="#">Syarat & Ketentuan</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
