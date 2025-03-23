import { useEffect, useState } from "react";
import { supabase } from "../data/supabase";
import { useNavigate } from "react-router";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Profile() {
  const [userData, setUserData] = useState("");
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  // Ambil data user dari localStorage saat pertama kali render
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) {
      console.log("Navigating to login...");
      navigate("/login");
      return;
    }
    setUserData(loggedInUser[0]);
  }, [navigate]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleUpdate(e) {
    console.log("Profile change button clicked");
    e.preventDefault();

    const userId = userData.id;

    // Ambil data user saat ini dari database
    const { data: currentUser, error: userError } = await supabase
      .from("users")
      .select("username, password")
      .eq("id", userId)
      .single();

    if (userError) {
      console.error("Error fetching current user data:", userError.message);
      return;
    }

    // Tentukan nilai baru berdasarkan input, jika kosong pakai yang lama
    const updatedUsername = form.username || currentUser.username;
    const updatedPassword = form.password || currentUser.password;

    // Cek apakah username sudah digunakan oleh user lain
    if (form.username) {
      const { data: existingUser, error: checkError } = await supabase
        .from("users")
        .select("id")
        .eq("username", form.username)
        .neq("id", userId) // Pastikan bukan username milik sendiri
        .single();

      if (existingUser) {
        console.log(
          "Username sudah ada yang menggunakan!",
          existingUser,
          checkError
        );
        return;
      }
    }

    console.log("Update data...");

    const { data, error } = await supabase
      .from("users")
      .update({ username: updatedUsername, password: updatedPassword })
      .eq("id", userId);

    if (error) {
      console.error("Error updating user:", error.message);
    } else {
      console.log("User updated successfully", data);
      setUserData((prev) => ({ ...prev, username: updatedUsername })); // Update state userData

      // Update localStorage dengan data terbaru
      const updatedUserData = [{ ...userData, username: updatedUsername }];
      localStorage.setItem("loggedInUser", JSON.stringify(updatedUserData));

      // Reset form setelah submit
      setForm({ username: "", password: "" });
    }
  }

  async function handleDelete() {
    console.log("Hapus akun clicked");
    const { error } = await supabase
      .from("users")
      .delete()
      .eq("id", userData.id);
    if (error) {
      console.log("Gagal menghapus akun");
    } else {
      console.log("Akun berhasil dihapus");
      localStorage.removeItem("loggedInUser");
      setTimeout(() => navigate("/login"), 2000);
    }
  }

  return (
    <>
      <Navbar />
      <section className="flex justify-center items-center mb-10">
        <div className="container w-11/12">
          <h1 className="text-white my-7 text-2xl">Profile Saya</h1>
          <div className="profile-pict flex items-center gap-2 text-white">
            <img src="./avatar.jpg" alt="" className="w-24 h-24 rounded-full" />
            <div className="info">
              <h3>Hi!</h3>
              <span>{userData.username}</span>
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
