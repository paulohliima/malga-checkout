import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Para ignorar imports de estilos, se usados
  },
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.test.json",
      },
    ],
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(@mui|some-esm-lib)/)", // Ajuda a transpilar libs com ESM que causam erro
  ],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Se tiver esse arquivo
};

export default config;
