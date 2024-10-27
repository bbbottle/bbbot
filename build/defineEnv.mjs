import * as Dotenv from "dotenv";
Dotenv.config({
  path: `.prod.env`,
});

const invalidKeySet = new Set([
  "JetBrains Rider",
  "ProgramFiles(x86)",
  "CommonProgramFiles(x86)",
]);

export const GetDefineObj = () => {
  const define = {};
  for (const k in process.env) {
    if (invalidKeySet.has(k)) continue;

    define[`process.env.${k}`] = JSON.stringify(process.env[k])
  }

  return define;
}


