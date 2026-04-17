import { create } from 'zustand'

const USER_STORE = create((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    clearUser: () => set({ user: null }),
}))

export default USER_STORE;