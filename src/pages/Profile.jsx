import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useUserStore } from "../services/stores/userStorage";

function Profile() {
  const navigate = useNavigate();
  const { currentUser, updateProfile, deleteAccount } = useUserStore();
  const [form, setForm] = useState({ username: "", password: "" });

  // Cek apakah user sudah login
  useEffect(() => {
    if (!currentUser) {
      const localUser = JSON.parse(localStorage.getItem("loggedInUser"));
      if (localUser) {
        // Optional: jika ingin sync ke Zustand saat reload
        useUserStore.setState({ currentUser: localUser });
        setForm({ username: localUser.username, password: localUser.password });
      } else {
        navigate("/login");
      }
    } else {
      setForm({
        username: currentUser.username,
        password: currentUser.password,
      });
    }
  }, [currentUser, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!currentUser) return;

    await updateProfile(currentUser.id, form);
    alert("Profil berhasil diperbarui.");

    const updatedUser = { ...currentUser, ...form };
    localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
  };

  const handleDelete = async () => {
    if (!currentUser) return;

    const confirmDelete = confirm("Yakin ingin menghapus akun?");
    if (confirmDelete) {
      await deleteAccount(currentUser.id);
      localStorage.removeItem("loggedInUser");
      navigate("/login");
    }
  };

  return (
    <>
      <Navbar />
      <section className="flex justify-center items-center mb-10">
        <div className="container w-11/12">
          <h1 className="text-white my-7 text-2xl">Profile Saya</h1>
          <div className="profile-pict flex items-center gap-2 text-white">
            <img
              src={currentUser?.avatar || "./avatar.jpg"}
              alt=""
              className="w-24 h-24 rounded-full"
            />
            <div className="info">
              <h3>Hi!</h3>
              <span>{form.username}</span>
            </div>
          </div>

          <form onSubmit={handleUpdate} className="flex flex-col gap-4 mt-4">
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={form.username}
              onChange={handleChange}
              className="w-1/3 h-10 sm:h-12 rounded-lg px-3 bg-transparent border border-tertiary font-thin sm:font-normal text-white"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-1/3 h-10 sm:h-12 rounded-lg px-3 bg-transparent border border-tertiary font-thin sm:font-normal text-white"
            />

            <div className="actions flex gap-4">
              <button
                type="submit"
                className="bg-blue-500 px-4 py-2 rounded text-white"
              >
                Simpan
              </button>
              <button
                type="button"
                onClick={handleDelete}
                className="bg-red-500 px-4 py-2 rounded text-white"
              >
                Hapus Akun
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Profile;
