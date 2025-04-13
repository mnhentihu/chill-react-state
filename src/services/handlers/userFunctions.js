// src/handlers/authHandlers.js

import { useUserStore } from "../stores/userStorage";

export function handleChange(e, form, setForm) {
  setForm({ ...form, [e.target.name]: e.target.value });
}

export async function handleRegister({ form, setMessage, navigate }) {
  if (!form.username || !form.password) {
    return setMessage("Semua kolom wajib diisi");
  }

  const defaultAvatar =
    "https://api.dicebear.com/7.x/bottts-neutral/svg?seed=default";
  const newUser = {
    username: form.username,
    password: form.password,
    name: "",
    avatar: defaultAvatar,
  };

  try {
    await useUserStore.getState().register(newUser);
    navigate("/login");
  } catch (error) {
    setMessage("Gagal daftar user", error);
  }
}

export async function handleLogin(form, setMessage, navigate) {
  try {
    const user = await useUserStore.getState().login(form);
    if (user) {
      navigate("/dashboard"); // atau sesuaikan
    } else {
      setMessage("Username atau password salah");
    }
  } catch (error) {
    setMessage("Gagal login", error);
  }
}

export async function handleUpdate(userId, updatedData, setMessage, navigate) {
  try {
    await useUserStore.getState().update(userId, updatedData);
    navigate("/dashboard");
  } catch (error) {
    setMessage("Gagal memperbarui data", error);
  }
}

export async function handleDelete(userId, navigate) {
  try {
    await useUserStore.getState().remove(userId);
    navigate("/login");
  } catch (error) {
    console.error("Gagal hapus user", error);
  }
}
