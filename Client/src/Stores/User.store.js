import { create } from 'zustand'
import axiosInstance from '../Libs/axiosInstance.js'
import { toast } from 'react-toastify'

const USER_STORE = create((set, get) => ({
    user: null,
    isLoggingIn: false,
    isSigningUp: false,
    isCheckingAuth: false,
    login: async ({ email, password }) => {
        try {
            set({ isLoggingIn: true })
            const res = await axiosInstance.post('/auth/login', { email, password })
            toast.success('User Logged In')
            set({ user: res.data })
            return(get().user);
        } catch (e) {
            set({ isLoggingIn: false })
            toast.error('User NOT Logged In')
            console.log(e.message);
        }finally{
            set({ isLoggingIn: false })
        }
    },
    signup: async ({ username, email, password }) => {
        try {
            set({ isSigningUp: true })
            const res = await axiosInstance.post('/auth/signup', { username, email, password })
            toast.success('User Signed Up')
            set({ user: res.data })
            return get().user
        } catch (e) {
            set({ isSigningUp: false })
            toast.error('User NOT Signed Up')
            console.log(e.message);
        }finally{
            set({ isSigningUp: false })
        }
    },
    checkAuth: async () => {
        try {
            set({ isCheckingAuth: true })
            const res = await axiosInstance.get('/auth/check-auth')
            toast.success('User Authorized')
            set({ user: res.data.user })
            return(get().user);
        } catch (e) {
            set({ isCheckingAuth: false })
            console.log(e.message);
        }finally{
            set({ isCheckingAuth: false })
        }
    },
    logout: async () => {
        try {
            await axiosInstance.post('/auth/logout')
            set({ user : null })
            toast.success('Logged Out')
        } catch (e) {
            toast.error(e?.message || 'LogOut Failed')
        }
    }
}))

export default USER_STORE;