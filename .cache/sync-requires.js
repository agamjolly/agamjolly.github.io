const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/home/agamjolly/agamjolly.github.io/src/templates/blog-post.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/agamjolly/agamjolly.github.io/src/pages/404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/home/agamjolly/agamjolly.github.io/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/agamjolly/agamjolly.github.io/src/pages/index.js")))
}

