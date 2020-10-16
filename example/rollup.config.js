import replace from "@rollup/plugin-replace";
import serve from "rollup-plugin-serve";
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import css from "rollup-plugin-css-only";
import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "cjs",
  },
  plugins: [
    commonjs(),
    replace({
      "process.env.NODE_ENV": "'production'",
    }),
    serve({
      contentBase: ["static", "dist"],
    }),
    typescript(),
    resolve({ preferBuiltins: false }),
    css({ output: "dist/bundle.css", include: "/**/*.css" }),
    json(),
    terser(),
  ],
};
