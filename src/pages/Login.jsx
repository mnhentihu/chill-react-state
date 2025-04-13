import { NavLink, useNavigate } from "react-router";
import { useEffect, useState } from "react";

import google from "/logos/google logo.png.png";
import Button from "../components/Button";
import { handleLogin } from "../services/handlers/userFunctions";

function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function onSubmitLogin() {
    await handleLogin(form, setMessage, navigate);
    console.log("Hasil Form : ", form);
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="bg-[url(/backgrounds/BG_Login.jpeg)] bg-cover bg-no-repeat bg-fixed font-lato">
      <div className="flex justify-center items-center text-white h-screen">
        <div className="bg-primary/[0.84] w-4/5 sm:w-1/4 h-fit px-4 py-4 sm:px-8 sm:py-8 rounded-xl">
          <div className="flex flex-col justify-center items-center gap-3 mb-3 sm:gap-8 sm:mb-8">
            <img src="/logos/Logo Chill.png" alt="" className="w-24 sm:w-40" />
            <div className="flex flex-col justify-center items-center">
              <span className="font-medium text-lg sm:font-semibold sm:text-2xl">
                Masuk
              </span>
              <span className="font-light sm:font-normal text-xs sm:text-base">
                Selamat datang kembali!
              </span>
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmitLogin();
            }}
            className="flex flex-col justify-center items-center w-full gap-8 mb-2 text-sm sm:text-base"
          >
            <div className="flex flex-col justify-center items-start w-full gap-1 sm:gap-2">
              <label htmlFor="" className="font-light sm:font-normal">
                Username
              </label>
              <input
                type="text"
                placeholder="Masukkan username"
                name="username"
                value={form.username}
                onChange={handleChange}
                className="w-full h-10 sm:h-12 rounded-full px-3 bg-transparent border border-tertiary font-thin sm:font-normal"
              />
            </div>
            <div className="flex flex-col justify-center items-start w-full gap-1 sm:gap-2">
              <label htmlFor="" className="font-light sm:font-normal">
                Kata Sandi
              </label>
              <input
                type="password"
                placeholder="Masukkan kata sandi"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full h-10 sm:h-12 rounded-full px-3 bg-transparent border border-tertiary font-thin sm:font-normal"
              />
            </div>

            {message && (
              <p className="text-red-400 text-sm text-center">{message}</p>
            )}

            <Button type="submit">Masuk</Button>
          </form>

          <div className="flex justify-between items-center mb-10">
            <span className="font-thin text-sm sm:font-light sm:text-base">
              Belum memiliki akun?
              <NavLink
                to="/register"
                className="font-light text-xs sm:font-semibold sm:text-base"
              >
                Daftar
              </NavLink>
            </span>
            <a
              href="/"
              className="font-light text-xs sm:font-semibold sm:text-base"
            >
              Lupa kata sandi?
            </a>
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2.5">
            <span className="font-light text-xs sm:font-normal sm:text-base">
              Atau
            </span>
            <Button>
              <img src={google} alt="" className="w-2.5 sm:w-4" />
              <NavLink to="/dashboard">Masuk</NavLink>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
