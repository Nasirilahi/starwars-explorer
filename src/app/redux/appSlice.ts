import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppSliceProps {
  isMenuOpen: boolean;
  isMobileMenuOpen: boolean;
  animateClose: boolean;
}

export const initialState: AppSliceProps = {
  isMenuOpen: true,
  isMobileMenuOpen: false,
  animateClose: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setMenuOpen: (state: AppSliceProps, action: PayloadAction<boolean>) => ({
      ...state,
      isMenuOpen: action.payload,
    }),
    setMobileMenuOpen: (state, action) => ({
      ...state,
      isMobileMenuOpen: action.payload,
      animateClose: true,
    }),
  },
});

export const { setMenuOpen, setMobileMenuOpen } = appSlice.actions;
