/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          accent: '#FFB000', // primary yellow-orange
          accentDark: '#E69A00',
          teal: '#0ea5a4',
          tealDark: '#0b8484',
          ink: '#0f172a',
          paper: '#fffaf0',
        }
      },
      borderRadius: {
        md: '8px',
        lg: '12px'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        poppins: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        raise: '0 6px 16px rgba(0,0,0,0.12)'
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'carousel': 'carousel 24s linear infinite',
        'accordion': 'accordion 300ms ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        carousel: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        accordion: {
          '0%': { height: '0' },
          '100%': { height: 'var(--radix-accordion-content-height)' }
        }
      },
      screens: {
        xs: '480px',
        sm: '480px',
        md: '768px',
        lg: '1200px'
      }
    },
  },
  plugins: [],
}
