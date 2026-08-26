import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        'aicon-blue': '#1532B1',
        'aicon-yellow': '#FCDC58',
        'aicon-red': '#7D0202',
        'aicon-bone': '#FDF8E9',
        'aicon-ink': '#14161A',
      },
    },
  },
  plugins: [],
};
export default config;
