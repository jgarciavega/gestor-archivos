module.exports = {
  important: true, // 👈 Debe estar en la raíz del objeto
  content: [
    './src/**/*.{js,ts,jsx,tsx}', 
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // extensiones personalizadas si las necesitas
    },
  },
  plugins: [],
};