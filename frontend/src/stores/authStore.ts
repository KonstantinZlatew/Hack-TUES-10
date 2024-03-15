import { create } from 'zustand'

type User = {
    id: string;
    email: string;
    username: string;
    password: string;
}

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