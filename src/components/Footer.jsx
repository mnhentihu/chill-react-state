import { NavLink } from "react-router";

function Footer() {
  return (
    <>
      <footer className="flex justify-center border-t py-8 sm:py-12 text-white">
        <div className="w-11/12 flex justify-between flex-col sm:flex-row">
          <div className="flex flex-col justify-center gap-y-4 sm:gap-y-0 mb-10 sm:mb-0">
            <img src="/logos/Logo Chill.png" alt="" className="h-9 w-fit" />

            <p className="text-sm font-light">
              @2024 Chill All Rights Reserved.
            </p>
          </div>
          <div className="block sm:hidden">
            <button
              className="w-full text-left py-2 flex justify-between items-center focus:outline-none"
              onClick="toggleAccordion('accordion1')"
            >
              <span className="text-normal font-medium">Genre</span>
              <span
                id="icon-accordion1"
                className="iconify transform transition-transform"
                data-icon="ri:arrow-right-s-line"
                data-width="24"
                data-height="24"
              ></span>
            </button>
            <div
              id="accordion1"
              className="hidden pl-4 transition-all duration-300"
            >
              <div className="flex gap-6">
                <div className="text-sm font-light flex flex-col gap-3">
                  <p>Aksi</p>
                  <p>Anak-anak</p>
                  <p>Anime</p>
                  <p>Britania</p>
                </div>
                <div className="text-sm font-light flex flex-col gap-3">
                  <p>Drama</p>
                  <p>Fantasi Ilmiah & fantasi</p>
                  <p>Kejahatan</p>
                  <p>KDrama</p>
                </div>
                <div className="text-sm font-light flex flex-col gap-3">
                  <p>Komedi</p>
                  <p>Petualangan</p>
                  <p>Perang</p>
                  <p>Romantis</p>
                </div>
                <div className="text-sm font-light flex flex-col gap-3">
                  <p>Sains & Alam</p>
                  <p>Thriller</p>
                </div>
              </div>
            </div>
          </div>
          <div className="genre hidden sm:flex flex-col gap-3">
            <h1 className="text-normal font-medium">Genre</h1>
            <div className="flex gap-6">
              <div className="text-sm font-light flex flex-col gap-3">
                <NavLink>Aksi</NavLink>
                <NavLink href="#">Anak-anak</NavLink>
                <NavLink href="#">Anime</NavLink>
                <NavLink href="#">Britania</NavLink>
              </div>
              <div className="text-sm font-light flex flex-col gap-3">
                <NavLink href="#">Drama</NavLink>
                <NavLink href="#">Fantasi Ilmiah & fantasi</NavLink>
                <NavLink href="#">Kejahatan</NavLink>
                <NavLink href="#">KDrama</NavLink>
              </div>
              <div className="text-sm font-light flex flex-col gap-3">
                <NavLink href="#">Komedi</NavLink>
                <NavLink href="#">Petualangan</NavLink>
                <NavLink href="#">Perang</NavLink>
                <NavLink href="#">Romantis</NavLink>
              </div>
              <div className="text-sm font-light flex flex-col gap-3">
                <NavLink href="#">Sains & Alam</NavLink>
                <NavLink href="#">Thriller</NavLink>
              </div>
            </div>
          </div>
          <div className="block sm:hidden">
            <button
              className="w-full text-left py-2 flex justify-between items-center focus:outline-none"
              onClick="toggleAccordion('accordion2')"
            >
              <span className="text-normal font-medium">Bantuan</span>
              <span
                id="icon-accordion2"
                className="iconify transform transition-transform"
                data-icon="ri:arrow-right-s-line"
                data-width="24"
                data-height="24"
              ></span>
            </button>
            <div
              id="accordion2"
              className="hidden pl-4 transition-all duration-300"
            >
              <div className="text-sm font-light flex flex-col gap-3">
                <NavLink href="#">FAQ</NavLink>
                <NavLink href="#">Kontak Kami</NavLink>
                <NavLink href="#">Privasi</NavLink>
                <NavLink href="#">Syarat & Ketentuan</NavLink>
              </div>
            </div>
          </div>
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
    </>
  );
}

export default Footer;
