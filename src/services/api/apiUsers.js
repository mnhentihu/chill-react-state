const api_url = import.meta.env.VITE_API_URL;

export async function getUsers() {
  try {
    const response = await fetch(api_url, {
      method: "GET",
      headers: { "content-type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Gagal fetch data");
    }

    const data = await response.json();
    console.log("Fetched data from API:", data); // Log data untuk memastikan format
    return Array.isArray(data) ? data : []; // Pastikan data berupa array
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
}

export async function addUser(newUser) {
  try {
    const response = await fetch(api_url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });

    if (!response.ok) {
      throw new Error("Gagal menambahkan user");
    }

    return await response.json();
  } catch (error) {
    console.error("Add User Error:", error);
    return null;
  }
}

export async function loginUser(username, password) {
  try {
    const users = await getUsers(); // Mendapatkan daftar user
    console.log("Fetched users:", users); // Pastikan data ada dan berupa array

    // Cek apakah data users berupa array
    if (Array.isArray(users)) {
      const user = users.find(
        (u) => u.username === username && u.password === password
      );
      console.log("Found user:", user); // Pastikan pencarian berhasil
      return user || null;
    } else {
      console.error("Data users bukan array:", users);
      return null;
    }
  } catch (error) {
    console.error("Login error:", error);
    return null;
  }
}

export async function updateUser(id, updatedData) {
  try {
    const response = await fetch(`${api_url}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error("Gagal mengupdate user");
    }

    return await response.json();
  } catch (error) {
    console.error("Update User Error:", error);
    return null;
  }
}

export async function deleteUser(id) {
  try {
    const response = await fetch(`${api_url}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Gagal menghapus user");
    }

    return true;
  } catch (error) {
    console.error("Delete User Error:", error);
    return false;
  }
}
