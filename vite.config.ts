import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    coverage: {
      reporter: ["json-summary", "json", "lcov"],
      exclude: ['./build', './node_modules']
    },
    exclude: ['./build', './node_modules'],
  },
});