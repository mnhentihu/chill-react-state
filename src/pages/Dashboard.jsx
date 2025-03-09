import { Icon } from "@iconify/react/dist/iconify.js";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import potrait from "../data/potrait.json";
import landscape from "../data/landscape.json";
import ContinueWatch from "../components/ContinueWatch";

function Dashboard() {
  // Fungsi sorting
  const topRating = [...potrait].sort((a, b) => b.rating - a.rating);
  const trending = [...potrait].sort((a, b) => a.rank - b.rank);
  const newRelease = [...potrait].sort(
    (a, b) => new Date(b.update_at) - new Date(a.update_at)
  );

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="h-[240px] sm:h-[500px] relative text-white">
        <img
          src="/tedlasso.png"
          alt=""
          className="w-screen h-[240px] sm:h-[500px] object-cover"
        />
        <div className="h-full bg-gradient-to-t from-primary to-transparent flex justify-center items-end absolute top-0 left-0 w-full z-10">
          <div className="w-11/12 pb-8 sm:pb-16">
            <div className="flex flex-col justify-center items-start w-2/3 sm:w-1/2 gap-1 sm:gap-6 mb-2 sm:mb-8">
              <h1 className="font-bold text-2xl sm:text-5xl">Ted Lasso</h1>
              <p className="text-sm sm:text-base line-clamp-2 sm:line-clamp-none">
                Seorang pelatih sepak bola asal Amerika Serikat yang diboyong ke
                Inggris untuk melatih klub sepak bola Premier League, AFC
                Richmond. Ted yang tanpa pengalaman di sepak bola Inggris pada
                mulanya disewa oleh pemilik klub dengan harapan ia akan gagal
                dan membuat AFC Richmond berantakan.
              </p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-1 text-white">
                <button className="bg-button w-fit py-1 sm:py-2 px-3 sm:px-10 rounded-full hover:bg-primary">
                  <span className="text-sm sm:text-base">Mulai</span>
                </button>
                <button className="flex justify-center items-center gap-2 bg-primary w-fit py-1 sm:py-2 px-3 sm:px-10 rounded-full hover:bg-secondary">
                  <Icon
                    icon="material-symbols:info-outline"
                    width="15"
                    height="15"
                  />
                  <span className="text-sm sm:text-base">Selengkapnya</span>
                </button>
                <p className="border border-white rounded-full p-1 text-sm sm:text-base">
                  13+
                </p>
              </div>
              <button className="border border-white rounded-full p-1 text-white">
                <Icon icon="clarity:volume-mute-line" width="15" height="15" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Landscape Carousel Section */}
      <section className="flex justify-center text-white">
        <div className="w-11/12">
          <h1 className="text-xl sm:text-3xl font-bold my-4 sm:my-10">
            Melanjutkan Tonton Film
          </h1>
          <ContinueWatch data={landscape} />
        </div>
      </section>

      {/* Todays Top Carousel Section */}
      <section className="flex justify-center text-white">
        <div className="w-11/12">
          <h1 className="text-xl sm:text-3xl font-bold my-4 sm:my-10">
            Top Rating Film dan Series Hari ini
          </h1>
          <Carousel data={topRating} />
        </div>
      </section>

      {/* Trending Carousel Section */}
      <section className="flex justify-center text-white">
        <div className="w-11/12">
          <h1 className="text-xl sm:text-3xl font-bold my-4 sm:my-10">
            Film Trending
          </h1>
          <Carousel data={trending} />
        </div>
      </section>

      {/* New Release Carousel Section */}
      <section className="flex justify-center text-white  mb-10">
        <div className="w-11/12">
          <h1 className="text-xl sm:text-3xl font-bold my-4 sm:my-10">
            Rilis Baru
          </h1>
          <Carousel data={newRelease} />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Dashboard;
