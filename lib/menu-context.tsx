'use client';

import { createContext, useContext, ReactNode, useState } from 'react';
import { IHeaderItem } from '@/types';

interface IMenuContextValue {
  menuItems: IHeaderItem[];
  setMenuItems: (items: IHeaderItem[]) => void;
}

const MenuContext = createContext<IMenuContextValue | null>(null);

export function MenuProvider({ children }: { children: ReactNode }) {
  const [menuItems, setMenuItems] = useState<IHeaderItem[]>([]);

  return (
    <MenuContext.Provider value={{ menuItems, setMenuItems }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
}
