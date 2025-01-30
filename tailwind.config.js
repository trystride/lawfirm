/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'ibm-plex': ['var(--font-ibm-plex)'],
        tajawal: ['Tajawal', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        geist: ['var(--font-geist-sans)'],
        'ibm-plex-arabic': ['var(--font-ibm-plex-arabic)'],
      },
      animation: {
        grid: 'grid 20s linear infinite',
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'fade-down': 'fadeDown 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        grid: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(calc(var(--cell-size) * -1))' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      colors: {
        background: {
          DEFAULT: '#081425',
          light: '#0f1f35',
          dark: '#050d18'
        },
        'brand-gold': {
          DEFAULT: '#C5A572',
          light: '#D4B98F',
          dark: '#A88B55'
        },
        text: {
          primary: '#F5F5F5',
          secondary: '#B1B1B1',
        },
        primary: '#1A1A1A',
        accent: '#C5A572',
        'accent-light': '#BFA76A',
        'text-light': '#E5E5E5',
        'brand-navy': '#081425',
        'brand-charcoal': '#1A1A1A',
        'brand-light': '#F0F0F0',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-gradient': 'linear-gradient(to right, #EBCB8B, #CDAA6E, #845E30)',
        'gradient-gold': 'linear-gradient(90deg, #C5A572 0%, #D4B98F 50%, #A88B55 100%)',
      },
      spacing: {
        section: {
          sm: '2rem',
          md: '4rem',
          lg: '6rem',
        },
      },
      fontSize: {
        'body-base': '16px',
        'heading-1': '2.5rem',
        'heading-2': '2rem',
        'heading-3': '1.75rem',
        'heading-4': '1.5rem',
      },
      lineHeight: {
        'body': '1.7',
        'heading': '1.3',
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
}
