/**
 * Tailwind CSS configuration.
 *
 * The content array tells Tailwind where to look for class names.
 * Feel free to add more directories as your project grows.
 */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
