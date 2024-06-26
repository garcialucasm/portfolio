import type { Config } from "tailwindcss"

const config: Config = {
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
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      boxShadow: {
        "center-sm": "0 0 5px 0.5px rgba(0, 0, 0, 0.25 )",
        "center-md": "0 0 10px 1px rgba(0, 0, 0, 0.25 )",
        "center-lg": "0 0 20px rgba(0, 0, 0, 0.25 )",
        "center-xl": "0 0 25px rgba(0, 0, 0, 0.25)",
        "center-2xl": "0 0 30px rgba(0, 0, 0, 0.25)",
        "center-3xl": "0 0 35px rgba(0, 0, 0, 0.25)",
        "t-sm": "0 -1px 2px 0 rgba(0, 0, 0, 0.05)",
        "t-md":
          "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "t-lg":
          "0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "t-xl":
          "0 -20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "t-2xl": "0 -25px 50px -12px rgba(0, 0, 0, 0.25)",
        "t-3xl": "0 -35px 60px -15px rgba(0, 0, 0, 0.3)",
        "inner-top-light": "rgba(0, 0, 0, 0.5) 0px 1px 2px 2px inset",
        "inner-top-dark": "0px 1px 2px 2px inset black",
        "inner-bottom-light": "rgba(0, 0, 0, 0.5) 0px -1px 2px 2px inset",
        "inner-bottom-dark": "0px -1px 2px 2px inset black",
        "inner-only-bottom-light": "rgba(0, 0, 0, 0.5) 0px -120px 70px -70px inset",
        "inner-only-bottom-dark": "rgba(0, 0, 0, 1) 0px -150px 70px -70px inset",
        "inner-center-light": "rgba(0, 0, 0, 0.5) 0px 0px 2px 2px inset",
        "inner-center-dark": "0px 0px 2px 2px inset black",
      },
      screens: {
        xxs: "360px",
        xs: "420px",
      },
    },
  },
  plugins: [],
}
export default config
