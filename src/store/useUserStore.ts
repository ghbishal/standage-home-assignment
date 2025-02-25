import { create } from 'zustand';
import { type UserType } from '@/types/user';

type UserStore = {
  defaultUser: UserType;
  setDefaultUser: (user: UserType) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  defaultUser: { id: 1, name: 'Germineau Nicolas', avatarUrl: undefined },
  setDefaultUser: (user) => set({ defaultUser: user }),
}));
