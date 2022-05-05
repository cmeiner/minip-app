module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#e7e5e4",

          secondary: "#a5f3fc",

          accent: "#1FB2A6",

          neutral: "#191D24",

          "base-100": "#2A303C",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
