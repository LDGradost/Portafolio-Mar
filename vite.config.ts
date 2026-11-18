import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { readFileSync } from "node:fs";

function portableHtml(): Plugin {
  return {
    name: "portable-html",
    enforce: "post",
    generateBundle: {
      order: "post",
      handler(_, bundle) {
        const page = bundle["index.html"];
        if (page?.type !== "asset") throw new Error("Missing index.html");
        let html = String(page.source);
        for (const [name, asset] of Object.entries(bundle)) {
          if (asset.type === "chunk" && asset.isEntry) {
            html = html.replace(/<script\b[^>]*\bsrc="[^"]+"[^>]*><\/script>/, () =>
              "<script type=\"module\">" + asset.code.replace(/<\/script/gi, "<\\/script") + "</script>");
            delete bundle[name];
          } else if (asset.type === "asset" && name.endsWith(".css")) {
            html = html.replace(/<link\b[^>]*rel="stylesheet"[^>]*>/, () => "<style>" + asset.source + "</style>");
            delete bundle[name];
          }
        }
        const icon = readFileSync("public/favicon.png").toString("base64");
        html = html.replace("</body>", () => "<!-- " + readFileSync("public/LICENCIAS.txt", "utf8").replaceAll("--", "—") + " -->\n</body>");
        page.source = html.replace(/href="(?:\.\/|\/)favicon\.png"/, 'href="data:image/png;base64,' + icon + '"');
      },
    },
  };
}

export default defineConfig(({ mode }) => {
  const portable = mode === "portable";
  return {
    base: "./",
    plugins: [react(), tailwindcss(), ...(portable ? [portableHtml()] : [])],
    build: portable ? {
      outDir: "portable",
      assetsInlineLimit: () => true,
      copyPublicDir: false,
      modulePreload: false,
    } : {},
  };
});

