const process = require("process");
const postcssElmTailwind = require("postcss-elm-tailwind")(/*{
  elmFile: "src/TLWND.elm",
  elmModuleName: "TLWND",
  prefix: "",
  formats: {
    svg: {
      elmFile: "src/TLWND/Svg.elm",
      elmModuleName: "TLWND.Svg"
    },
    string: {
      elmFile: "src/TLWND/String.elm",
      elmModuleName: "TLWND.String"
    }
  }
}*/);

module.exports = {
  plugins: [
    require("tailwindcss"),
    // ...(process.env.NODE_ENV === "production" ? [] : [postcssElmTailwind]),
    require("autoprefixer")
  ]
};
