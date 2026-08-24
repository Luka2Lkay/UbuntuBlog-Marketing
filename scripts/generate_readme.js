import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");

const technologiesPath = path.join(
  ROOT_DIR,
  "scripts",
  "data",
  "technologies.json",
);
const packageJsonPath = path.join(ROOT_DIR, "package.json");
const templatePath = path.join(ROOT_DIR, "README.template.md");
const readmePath = path.join(ROOT_DIR, "README.md");

const readJson = (filepath) => {
  return JSON.parse(fs.readFileSync(filepath, "utf-8"));
};

const getInstalledPackages = (packageJson) => {
  return new Set([
    ...Object.keys(packageJson.dependencies || {}),
    ...Object.keys(packageJson.devDependencies || {}),
  ]);
};

const generateTechnologyList = (installedPackages, technologyMap) => {
  return Object.entries(technologyMap)
    .filter(([packageName]) => installedPackages.has(packageName))
    .map(([, technologyName]) => `- ${technologyName}`)
    .join("\n");
};

const packageJson = readJson(packageJsonPath);
const technologies = readJson(technologiesPath);

const installedPackages = getInstalledPackages(packageJson);

const technologyStack = generateTechnologyList(
  installedPackages,
  technologies.stack,
);

const version = packageJson.version || "0.0.0";

let readMe = fs.readFileSync(templatePath, "utf-8");

readMe = readMe
  .replaceAll("{{VERSION}}", version)
  .replaceAll("{{TECHNOLOGY}}", technologyStack);

fs.writeFileSync(readmePath, readMe);

console.log("README.md generated successfully!");
