import defaultTheme from 'tailwindcss/defaultTheme';
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Figtree", ...defaultTheme.fontFamily.sans],
        notosansjp: ['NotoSansJP'],
        ubuntumono: ['UbuntuMono'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
