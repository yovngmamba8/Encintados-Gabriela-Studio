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
          'pink-light': '#FFF0F3',   // Softest sweet pink
          'pink': '#FFC2D1',         // Delicate pastel pink
          'pink-dark': '#C52B58',    // Vibrant deep rose pink for AA contrast text & buttons
          'purple-light': '#F3E8FF', // Light lilac/lavender
          'purple': '#C084FC',       // Sweet violet/purple pastel
          'purple-dark': '#9333EA',  // Deep purple for titles
          'cream': '#FAF9F6',        // Warm alabaster cream for background
          'dark': '#4A3E3D',         // Warm charcoal brown for premium typography
          'gold': '#E6C186',         // Champagne gold accents
          'gold-dark': '#8A6729',    // Darker gold for AA contrast text & borders
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(255, 194, 209, 0.25)',
        'premium': '0 20px 40px -15px rgba(74, 62, 61, 0.08)',
        'glass': '0 8px 32px 0 rgba(255, 194, 209, 0.15)',
      }
    },
  },
  plugins: [],
}
