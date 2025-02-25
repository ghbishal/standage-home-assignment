import { create } from 'zustand';
import { type UserType } from '@/types/user';

type UserStore = {
  defaultUser: UserType;
  setDefaultUser: (user: UserType) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  defaultUser: {
    id: 1,
    name: 'Germineau Nicolas',
    avatarUrl:
      'https://images.unsplash.com/photo-1738255594069-76385a01a31d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  setDefaultUser: (user) => set({ defaultUser: user }),
}));
