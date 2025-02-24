import { ColorPickerValueText } from '@chakra-ui/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", 
  theme: {
    extend: {
      colors: {
        primaryBackground:{
          light:"#EFF2F6",
          dark:"#191A1F",
        },
        componentBg:{
          light:"#FFFFFF",
          dark:"#141519",
        },
        imputBg:{
          light:"#EEF0F2",
          dark:"#202227",
        },
        buttonsBg:{
          light:"#E7F0FD",
          dark:"#141E2E",
        },
        ColorText: {
          light:"#676A79",
          dark:"#676A79",
        },
    },
  },
  plugins: [],
}
}