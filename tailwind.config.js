/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    // screens: {
    //   sm: "480px",
    //   md: "768px",
    //   lg: "976px",
    //   xl: "1440px",
    // },
    screens: {
      xsm: "250px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      cgray: "#64748b",
      cred: "#ec488b",
      cblack: "#334155",
      cblack2: "#475569",
      footer: "#475569",
      white: "#fff",
      black: "#000",
      card: "#db2777",
      cgray2: "#f1f5f9",
    },
  },
  plugins: [],
};
