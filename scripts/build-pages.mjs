import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const layoutPath = path.join(rootDir, "src", "app", "layout.tsx");
const originalLayout = fs.readFileSync(layoutPath, "utf8");

// Strip request-time headers() solely for static `output: "export"` artifact builds (GitHub Pages).
const staticLayout = originalLayout
  .replace('import { headers } from "next/headers";\n', "")
  .replace("export default async function RootLayout(", "export default function RootLayout(")
  .replace(
    '  const reqHeaders = await headers();\n  const nonce = reqHeaders.get("x-nonce") ?? undefined;\n\n',
    ""
  )
  .replace('      data-csp-nonce={nonce ? "active" : "static"}\n', "");

const nextBin = path.join(rootDir, "node_modules", ".bin", "next");

try {
  fs.writeFileSync(layoutPath, staticLayout, "utf8");
  execFileSync(nextBin, ["build"], {
    cwd: rootDir,
    stdio: "inherit",
    env: {
      ...process.env,
      GITHUB_PAGES: "true",
    },
  });
} finally {
  fs.writeFileSync(layoutPath, originalLayout, "utf8");
}
