/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        canvas: {
          DEFAULT: '#FAFAF9', 
          900: '#FAFAF9',
          800: '#F5F5F4',     
        },
        dark: {
          DEFAULT: '#1C1917',
          900: '#1C1917',
        },
        line: {
          DEFAULT: '#E7E5E4', 
          bright: '#D6D3D1',
        },
        titanium: '#1C1917',  // Dark warm text
        silver: '#57534E',    // Medium warm text
        accent: {
          DEFAULT: '#EA580C', // Orange Accent
          hover: '#C2410C',
        },
      },
    },
  },
  plugins: [],
};