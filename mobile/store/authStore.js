//This file connects the backend and the frontend
import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { API_URL } from "../constants/api";

export const useAuthStore = create ((set) =>({
    // set is used to update the info from the frontend file (signup.jsx)
    // Following is tutorial code in comments to understand the working of zustand. These variables are basically global
    // user: { name: "john" },
    // setUser:(user) => set({user}),
    // sayHello: () => console.log("hello"),

    user: null, 
    token: null,
    isLoading: true,

    register: async (username, email, password) => {
        set({ isLoading: true });
        try {
            const response = await fetch(`${API_URL}/auth/register`, {
                method: "POST" ,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username, 
                    email, 
                    password
                })
            })

            const data = await response.json();
            if (!response.ok) throw new Error (data.message || "Something went wrong")

            // We're storing the user in our local async storage for future use (baar baar nahi query dalni database ko)
            await AsyncStorage.setItem("user", JSON.stringify(data.user));
            await AsyncStorage.setItem("token", data.token)

            // We're setting the user value for this run of the function
            set({token: data.token,user:data.user, isLoading: false });

            return {success: true}

        } catch (error) {
            set({isLoading:false})
            return {success:false, error:error.message}
        }
    },

    checkAuth: async () => {
        set({ isLoading: true });
        try {
            const token = await AsyncStorage.getItem("token")
            const userJson = await AsyncStorage.getItem("user")
            const user = userJson ? JSON.parse(userJson) : null

            set({token, user})

        } catch (error) {
            console.log("User check failed")
        } finally {
            set({isLoading:false})
        }
    },

    login: async (email, password) => {
        set({ isLoading: true });
        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: "POST" ,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, 
                    password
                })
            })

            const data = await response.json();
            if (!response.ok) throw new Error (data.message || "Something went wrong")

            // We're storing the user in our local async storage for future use (baar baar nahi query dalni database ko)
            await AsyncStorage.setItem("user", JSON.stringify(data.user));
            await AsyncStorage.setItem("token", data.token)

            // We're setting the user value for this run of the function
            set({token: data.token,user:data.user, isLoading: false });

            return {success: true}

        } catch (error) {
            set({isLoading:false})
            return {success:false, error:error.message}
        }
    },

    logout: async () => {
        await AsyncStorage. removeItem ("token"); 
        await AsyncStorage. removeItem ("user"); 
        set({ token: null, user: null });
    }

}));