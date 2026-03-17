import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { User } from '../features/users/types/User';

type FavoritesState = {
  favorites: User[];
  addFavorite: (user: User) => void;
  removeFavorite: (id: number) => void;
};

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set) => ({
      favorites: [],

      addFavorite: (user: User) =>
        set((state) => {
          if (state.favorites.find((u) => u.id === user.id)) {
            return state;
          }

          return {
            favorites: [...state.favorites, user],
          };
        }),

      removeFavorite: (id: number) =>
        set((state) => ({
          favorites: state.favorites.filter((u) => u.id !== id),
        })),
    }),
    {
      name: 'favorites-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
