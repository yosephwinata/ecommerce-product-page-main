/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "hsl(26, 100%, 55%)",
        "orange-shadow": "hsl(26, 100%, 55%, 0.5)",
        "pale-orange": "hsl(25, 100%, 94%)",
        "very-dark-blue": "hsl(220, 13%, 13%)",
        "dark-grayish-blue": "hsl(219, 9%, 45%)",
        "grayish-blue": "hsl(220, 14%, 75%)",
        "light-grayish-blue": "hsl(223, 64%, 98%)",
        "very-light-gray": "hsl(219, 35%, 92%)",
        "very-slight-gray": "hsl(220, 59%, 98%)",
        white: "hsl(0, 0%, 100%)",
        black: "hsl(220, 14%, 13%)",
        "perfect-black": "hsl(0, 0%, 0%)",
      },
    },
  },
  plugins: [],
};
