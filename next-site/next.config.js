var path = require('path');

module.exports = {
  trailingSlash: false,
  webpack: (config) => {
    // To make Bazel dev server work
    config.watchOptions = { poll: 300 };

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "svg-inline-loader",
        },
      ],
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      react: path.resolve(
        path.join(process.env.RUNFILES, "npm", "node_modules", "react")
      ),
    };

    console.log(process.env.RUNFILES);

    // config.plugins.push(
    //   new webpack.IgnorePlugin({
    //     resourceRegExp: /jsdom/
    //   })
    // );
    return config;
  },

  // Enforce static build id
  generateBuildId: () => "bazel",
};
