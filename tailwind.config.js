/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        azul: "#2738F5",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        90: "90px",
        108: "108px",
        784: "784px",
        479: "479px",
        340: "340px",
        170: "170px",
      },
      width: {
        582: "582px",
        708: "708px",
        712: "712px",
        1200: "1200px",
      },
    },
  },
  plugins: [],
}
