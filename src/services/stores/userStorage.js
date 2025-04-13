import { create } from "zustand";
import {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
  loginUser,
} from "../api/apiUsers";

export const useUserStore = create((set) => ({
  users: [],
  currentUser: null,

  fetchUsers: async () => {
    const data = await getUsers();
    set({ users: data });
  },

  register: async (userData) => {
    const newUser = await addUser(userData);
    if (newUser) {
      set((state) => ({ users: [...state.users, newUser] }));
    }
  },

  login: async (username, password) => {
    const user = await loginUser(username, password);
    set({ currentUser: user });
    return user;
  },

  logout: () => set({ currentUser: null }),

  updateProfile: async (id, updatedData) => {
    const updatedUser = await updateUser(id, updatedData);
    if (updatedUser) {
      set((state) => ({
        users: state.users.map((user) => (user.id === id ? updatedUser : user)),
        currentUser:
          state.currentUser?.id === id ? updatedUser : state.currentUser,
      }));
    }
  },

  deleteAccount: async (id) => {
    const success = await deleteUser(id);
    if (success) {
      set((state) => ({
        users: state.users.filter((user) => user.id !== id),
        currentUser: state.currentUser?.id === id ? null : state.currentUser,
      }));
    }
  },
}));
