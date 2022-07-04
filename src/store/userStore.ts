import create from 'zustand';

export type ILoginType = 'apple' | 'facebook' | 'google' | 'email';

export type IUser = {
  user: {
    id: string;
    name: string;
    email: string;
    appleId: string | null;
    facebookId: string | null;
    googleId: string | null;
    loginType: ILoginType;
  };
  accessToken: string;
  refreshToken: string;
};

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
