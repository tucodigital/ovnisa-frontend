import type { Config } from "tailwindcss";

const config: Config = {

  safelist: [
    'top-[5%]',
    'top-[15%]',
    'top-[20%]',
    'top-[28%]',
    'top-[32%]',
    'top-[38%]',
    'top-[42%]',
    'top-[46%]',
    'top-[54%]',
    'top-[65%]',
    'top-[70%]',
    'top-[75%]',
    'top-[77%]',
    'top-[97%]',
    'right-[38%]',
    'right-[43%]',
    'right-[56%]',
    'right-[58%]',
    'right-[62%]',
    'right-[64%]',
    'right-[68%]',
    'right-[72%]',
    'right-[80%]',
    'right-[83%]',
    'right-[89%]',
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
      },
      colors: {
        ov: {
          primary: "#001748",
          primaryLight: "#194092",
        },
      },
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
      },
      boxShadow: {
        'contact': '0px 0px 10px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
};
export default config;
