/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [ 
      {
        pctheme: {
          primary: "#3b82f6",

          secondary: "#D926A9",

          accent: "#1FB2A6",

          neutral: "#191D24",

          

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
  corePlugins: {
    preflight: false,
  },
  important: true,
};
