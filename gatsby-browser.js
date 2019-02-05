/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
// require("picturefill/dist/plugins/mutation/pf.mutation");
// const picturefill = require("picturefill");

exports.onClientEntry = async () => {
  const picturefill = await import("picturefill");
  await import("picturefill/dist/plugins/mutation/pf.mutation");
  picturefill.default();
};

// exports.onRouteUpdate = () => picturefill();
