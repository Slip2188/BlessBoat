import { create } from "zustand";
import { API_URL } from "../constants/api";
// import { useAuthStore } from "./authStore";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useMainStore = create((set) => ({
  journals: [],
  currentJournal: [],
  loading: false,
  journalsLoaded: false,

  // Get all journals
  getJournals: async () => {
    const token = await AsyncStorage.getItem("token");
    if (!token) return;

    set({ loading: true });
    try {
      const response = await fetch(`${API_URL}/journal`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      AsyncStorage.setItem("journals", JSON.stringify(data));
      if (!response.ok) throw new Error(data.message || "Failed to fetch journals");

      set({ journals: data});
    } catch (error) {
      console.error("Error fetching journals:", error);
    } finally {
      set({ loading: false, journalsLoaded:true  });
    }
  },

  // Add new journal
  addJournal: async (journalName) => {
    const token = await AsyncStorage.getItem("token");
    if (!token) return;

    set({ loading: true, journalsLoaded: false });
    try {
      const response = await fetch(`${API_URL}/journal`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ journalName }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to create journal");

      // Add the new journal to state without refetching all: means you’re passing a callback to set. Zustand gives you the current state as state. This is the preferred pattern when your new value depends on the old state (like adding something to an array).
      set((state) => { 
        const updated = [...state.journals, data];
        AsyncStorage.setItem("journals", JSON.stringify(updated)); // persist
        return { journals: updated };
        });
      return true;
    } catch (error) {
      console.error("Error adding journal:", error);
      return false;
    } finally {
      set({ loading: false, journalsLoaded: true });
    }
  },

  // Delete a journal
  deleteJournal: async (journalId) => {
    const token = await AsyncStorage.getItem("token");
    if (!token) return;

    try {
      const response = await fetch(`${API_URL}/journal/${journalId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) throw new Error("Failed to delete journal");

      set((state) => {
        const updated = state.journals.filter((j) => j._id !== journalId);
        AsyncStorage.setItem("journals", JSON.stringify(updated));
        return { journals: updated };
      });
      return true;
    } catch (error) {
      console.error("Error deleting journal:", error);
    }
  },

  // Set current journal
  setCurrentJournal: (journal) => set({ currentJournal: journal }),
}));
