import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "esbuild";

const rootDir = dirname(fileURLToPath(import.meta.url));
const distDir = join(rootDir, "dist");

function renderTemplate(template, data) {
  return template.replace(/<%= (\w+) %>/g, (_, key) => data[key] ?? "");
}

const packageJson = JSON.parse(
  await readFile(join(rootDir, "package.json"), "utf8"),
);
const { name: packageName } = packageJson;

await rm(distDir, { recursive: true, force: true });
await mkdir(distDir, { recursive: true });

await build({
  entryPoints: [`src/${packageName}.js`],
  outfile: `${distDir}/${packageName}.min.js`,
  minify: true,
  target: "es2015",
});

await build({
  entryPoints: [join(rootDir, `src/${packageName}.js`)],
  outfile: join(distDir, `${packageName}.min.js`),
  minify: true,
  bundle: false,
});

const meta = await readFile(
  join(rootDir, `src/${packageName}.meta.js`),
  "utf8",
);
const user = await readFile(
  join(rootDir, `src/${packageName}.user.js`),
  "utf8",
);
const userscript = renderTemplate(meta + user, packageJson);

await writeFile(join(distDir, `${packageName}.user.js`), userscript);
