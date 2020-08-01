module.exports = {
  theme: {
    container: {
      center: true,
    },
  },
  variants: {
    backgroundColor: [
      "responsive",
      "active",
      "disabled",
      "even",
      "first",
      "focus-within",
      "focus",
      "group-focus",
      "group-hover",
      "hover",
      "last",
      "odd",
      "visited"
    ]
  },
  plugins: [require("@tailwindcss/custom-forms"), require("@tailwindcss/ui")],
  prefix: "",
  purge: {
    content: ['./index.html', './dist/app.js']
  }
};
