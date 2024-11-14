
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-tsx": preferDefault(require("C:\\Users\\326\\countries-api\\src\\pages\\404.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("C:\\Users\\326\\countries-api\\src\\pages\\index.tsx")),
  "component---src-templates-about-tsx": preferDefault(require("C:\\Users\\326\\countries-api\\src\\templates\\about.tsx"))
}

