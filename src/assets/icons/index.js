// https://webpack.js.org/guides/dependency-management/#requirecontext
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
