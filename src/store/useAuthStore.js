import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      isLoggedIn: true,
      user: {
        id: 1,
        name: "Nguyen Van A",
        email: "nguyenvana@example.com",
        role: "admin",
      },
      login: (accessToken, refreshToken, user) => {
        set({
          accessToken,
          refreshToken,
          user,
          isLoggedIn: true,
        });
      },

      logout: () => {
        set({
          accessToken: null,
          refreshToken: null,
          user: null,
          isLoggedIn: false,
        });
      },

      setTokens: (accessToken, refreshToken) => {
        set({
          accessToken,
          refreshToken,
          isLoggedIn: !!accessToken,
        });
      },

      setUser: (user) => {
        set({ user });
      },

      refreshAccessToken: (newAccessToken) => {
        set({ accessToken: newAccessToken });
      },

    }),
    {
      name: 'auth-storage',
    }
  )
);

export default useAuthStore;
