import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const command = process.argv[2];

if (!command || !["build", "start"].includes(command)) {
  console.error("Usage: node scripts/run-next.mjs <build|start>");
  process.exit(1);
}

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, "..");
const nextCliEntry = path.join(repoRoot, "node_modules", "next", "dist", "bin", "next");

const child = spawn(process.execPath, [nextCliEntry, command], {
  stdio: "inherit",
  env: {
    ...process.env,
    NODE_ENV: "production",
  },
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 1);
});
