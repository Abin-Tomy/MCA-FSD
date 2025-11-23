// postcss.config.js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}, // <-- This is what the error wants
    autoprefixer: {},
  },
}