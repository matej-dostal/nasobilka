/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#1313B9",
        "secondary": "#000fff"
      }
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"]
    },
    screens: {
      sm: "640px",
      md: "768px"
    }
  },
  plugins: [],
}

