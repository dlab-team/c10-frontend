/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        azul: "#2738F5",
        azulClaro: "#E2F2FE",
        claro: "#E2F2FE",
        azulito: "#008FF7"
      },
      height: {
        90: "90px",
        108: "108px",
        204: "204px",
        216: "216px",
        784: "784px",
        479: "479px",
        340: "340px",
        170: "170px",
        956: "956px"
      },
      width: {
        285:"285px",
        582: "582px",
        556: "556px",
        708: "708px",
        712: "712px",
        1200: "1200px",
      },
    },
  },
  plugins: [],
}
