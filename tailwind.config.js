/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        "green": {
          5: "#f2fcf6",
          10: "#e5f8ec",
          20: "#ccf3db",
          30: "#b2ecc8",
          40: "#99e7b6",
          50: "#7fe0a4",
          60: "#66da92",
          100: "#00c249",
          500: "#009c3b",
          900: "#007c2f"
        },

        "dark-green": {
          5: "#f2f9f6",
          10: "#e5f2ee",
          20: "#cce7de",
          30: "#b2dacd",
          40: "#99cfbd",
          50: "#7fc2ac",
          60: "#66b79c",
          70: "#4caa8b",
          80: "#339f7b",
          90: "#19926a",
          100: "#00865a",
          500: "#056948"
        },

        "neutral-black": {
          5: "#f5f5f5",
          10: "#eaebeb",
          20: "#d7d8d7",
          30: "#c2c4c3",
          40: "#afb1b0",
          50: "#9a9d9c",
          60: "#878a88",
          70: "#727674",
          80: "#5f6361",
          90: "#4a4f4c",
          100: "#373c39",
        },

        "purple": {
          40: "#e4ccf3",
          60: "#7700c2",
          80: "#64069f",
          100: "#50047f"
        },

        "error": {
          DEFAULT: "#f52100",
          "light": "#fba699",
          "ultralight": "#fde8e5",
          "dark": "#8e3e32"
        },

        "success": {
          DEFAULT: "#00afff",
          "light": "#99dfff",
          "ultralight": "#e5f7ff",
          "dark": "#0070a4"
        },

        "alert": {
          DEFAULT: "#e3d700",
          "light": "#f4ef99",
          "ultralight": "#fcfbe5",
          "dark": "#868135"
        },

        "visual": {
          "green": "#8abb0e",
          "dark": "#769527",
          "heavy-dark": "#5e771f",
          "light": "#e8f1cf",
          "passionate-red": "#ff0043",
          "bg": "#f7f8f8",
          "blue": "#4d90ff",
          "caramel": "#e07c00",
        },

        "white": {
          DEFAULT: "#ffffff",
          0 : "#fff",
          50 : "#ffffff80",
          80 : "#ffffffcc",
        }

      },

      spacing: {
        '7.5': "1.875rem",
        '9.5': "2.375rem",
        '15': "3.75rem",
        '18': "4.5rem",
        '120': "30rem"
      },

      maxWidth: {
        'public': '1152px',
      },

      fontSize: {
        26: ["1.625rem", "2rem"],
        34: ["2.125rem", "2.25rem"]
      },

      lineHeight: {
        'extra-tight': '1.11',
      }
    },
  },
  plugins: [],
}

