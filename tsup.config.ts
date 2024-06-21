import { defineConfig } from "tsup";

const year = new Date().getFullYear();

export default defineConfig({
  entry: ["./src/index.ts", "./src/id/index.ts"],
  splitting: true,
  clean: true,
  format: ["esm", "cjs"],
  dts: true,
  treeshake: "smallest",
  banner: {
    js: `// Copyright ${year} Dan https://github.com/dk-e/d-n`,
    css: `/* Copyright ${year} Dan https://github.com/dk-e/d-n */`,
  },
});
