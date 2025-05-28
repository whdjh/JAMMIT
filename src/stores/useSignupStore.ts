import { create } from 'zustand';

interface SignupStep1Data {
  email: string;
  name: string;
  password: string;
  setStep1Data: (data: {
    email: string;
    name: string;
    password: string;
  }) => void;
  resetSignupData: () => void;
}
export const useSignupStore = create<SignupStep1Data>((set) => ({
  email: '',
  name: '',
  password: '',
  setStep1Data: (data) => set(data),
  resetSignupData: () => set({ email: '', name: '', password: '' }),
}));
