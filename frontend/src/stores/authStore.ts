import { create } from 'zustand'
import { User } from '../types/types';

interface AuthState {
    user: User | null;
    setUser: (user: User) => void;
    removeUser: (userId: User["id"]) => void;
}

const useAuthStore = create<AuthState>((set) => ({
    user: null,
    setUser: (user) => set((state) => ({user: state.user})),
    removeUser: (userId) => set((state) => ({user: null}))
}))

export default useAuthStore;