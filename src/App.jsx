import { NavLink } from "react-router";

import chill from "/logos/Logo Chill.png";
import Button from "./components/Button";

function App() {
  return (
    <div className="bg-[url(/backgrounds/BG_Login.jpeg)] bg-cover bg-no-repeat bg-fixed font-lato">
      <div className="flex justify-center items-center text-white h-screen">
        <div className="bg-primary/[0.84] w-4/5 sm:w-1/4 h-fit px-4 py-4 sm:px-8 sm:py-8 rounded-xl">
          <div className="flex flex-col justify-center items-center gap-3 mb-3 sm:gap-8 sm:mb-8">
            <img src="/assets/Logo Chill.png" alt="" className="w-24 sm:w-40" />
            <div className="flex flex-col justify-center items-center gap-2">
              <span className="font-light sm:font-normal text-xs sm:text-base">
                Selamat datang di
              </span>
              <img src={chill} alt="" />
            </div>
          </div>
          <Button className="bg-transparent hover:bg-secondary ">
            <NavLink to="login">Masuk</NavLink>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
