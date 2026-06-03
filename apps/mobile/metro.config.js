// Metro config for the Kryptós CronOS mobile app inside the Turborepo monorepo.
// Watches the workspace root so changes in packages/* are picked up, resolves
// modules from both the app and the hoisted workspace node_modules, and enables
// package "exports" so @kryptos/core / @kryptos/api-client resolve their TS source.
const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, "../..");

const config = getDefaultConfig(projectRoot);

config.watchFolders = [workspaceRoot];
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, "node_modules"),
  path.resolve(workspaceRoot, "node_modules"),
];
config.resolver.unstable_enablePackageExports = true;

module.exports = config;
