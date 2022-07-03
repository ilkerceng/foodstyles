import create from 'zustand';

export type ILoginType = 'apple' | 'facebook' | 'google' | 'email';

export interface IUser {
  id: string;
  name: string;
  loginType: ILoginType;
  email?: string;
}

type State = {
  user: IUser | undefined;
  setUser: (user: IUser) => void;
};

export const useUserStore = create<State>(set => ({
  user: undefined,
  setUser: (user: IUser) => {
    set(state => ({user}));
  },
}));
