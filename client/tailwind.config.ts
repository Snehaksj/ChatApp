import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        backgroundgradientColour: "liner-gradient(to bottom,#000000,#923CB5)",
        gradientColour: "linear-gradient(to right, #ff00cc, #6600ff)",
        hovergradientColour: "linear-gradient(to right, #EE04BF, #5A03DE)",
      },
      screens: {
        "max-md": { max: "800px" }, // Customizing the max-md breakpoint
      },
    },
  },
  plugins: [],
};
export default config;
