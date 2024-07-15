import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        landingColour: "#000000",
      },
      screens: {
        "max-md": { max: "800px" }, // Customizing the max-md breakpoint
      },
    },
  },
  plugins: [],
};
export default config;
