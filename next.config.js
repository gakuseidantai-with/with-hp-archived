const withLinaria = require("next-linaria");
/**
 * Next Configuration
 */
/** @type {import('next/dist/server/config-shared').NextConfig} */
const config = (_phase, { defaultConfig }) => {
  return {
    ...withLinaria(defaultConfig),
    reactStrictMode: true,
    eslint: {
      dirs: ["src/pages"],
    },
  };
};

module.exports = config;
