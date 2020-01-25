// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": preferDefault(require("/home/pwener/Workspace/pwener.github.io/node_modules/gatsby-plugin-offline/app-shell.js")),
  "component---src-templates-blog-post-js": preferDefault(require("/home/pwener/Workspace/pwener.github.io/src/templates/blog-post.js")),
  "component---src-pages-about-js": preferDefault(require("/home/pwener/Workspace/pwener.github.io/src/pages/about.js")),
  "component---src-pages-cv-js": preferDefault(require("/home/pwener/Workspace/pwener.github.io/src/pages/cv.js")),
  "component---src-pages-index-js": preferDefault(require("/home/pwener/Workspace/pwener.github.io/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/home/pwener/Workspace/pwener.github.io/.cache/json/layout-index.json"),
  "offline-plugin-app-shell-fallback.json": require("/home/pwener/Workspace/pwener.github.io/.cache/json/offline-plugin-app-shell-fallback.json"),
  "layout-index.json": require("/home/pwener/Workspace/pwener.github.io/.cache/json/layout-index.json"),
  "hello-world.json": require("/home/pwener/Workspace/pwener.github.io/.cache/json/hello-world.json"),
  "layout-index.json": require("/home/pwener/Workspace/pwener.github.io/.cache/json/layout-index.json"),
  "desenvolvimento-software-artesanal.json": require("/home/pwener/Workspace/pwener.github.io/.cache/json/desenvolvimento-software-artesanal.json"),
  "layout-index.json": require("/home/pwener/Workspace/pwener.github.io/.cache/json/layout-index.json"),
  "about.json": require("/home/pwener/Workspace/pwener.github.io/.cache/json/about.json"),
  "layout-index.json": require("/home/pwener/Workspace/pwener.github.io/.cache/json/layout-index.json"),
  "cv.json": require("/home/pwener/Workspace/pwener.github.io/.cache/json/cv.json"),
  "layout-index.json": require("/home/pwener/Workspace/pwener.github.io/.cache/json/layout-index.json"),
  "index.json": require("/home/pwener/Workspace/pwener.github.io/.cache/json/index.json")
}

exports.layouts = {
  "component---src-layouts-index-js": preferDefault(require("/home/pwener/Workspace/pwener.github.io/.cache/layouts/index.js"))
}