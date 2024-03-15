import { create } from 'zustand'
import { User } from '../types/types';

interface AuthState {
    user: User | null;
    setUser: (user: User | null) => void;
}

const useAuthStore = create<AuthState>((set) => ({
    user: null,
    setUser: (newUser: User | null) => set({ user: newUser }),
}))

export default useAuthStore;