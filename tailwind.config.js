const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  //added by shadcn
  darkMode: ["class"],

  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    //added by shadcn
    './src/**/*.{ts,tsx}',
	],
  theme: {
    //added by shadcn
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    //

    extend: {
      fontFamily: {
        'sans': ['var(--font-roboto-condensed)', ...fontFamily.sans],
        'staatliches': ['var(--font-staatliches)', ...fontFamily.sans],
        
      },

      //added by shadcn
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  //
}
