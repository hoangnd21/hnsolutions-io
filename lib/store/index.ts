import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { IAppStore, Locale } from '@/types';

export const useAppStore = create<IAppStore>()(
  persist(
    (set) => ({
      locale: 'en',
      setLocale: (locale: Locale) => set({ locale }),
      theme: 'system',
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: 'hnsolutions-storage',
    }
  )
);

