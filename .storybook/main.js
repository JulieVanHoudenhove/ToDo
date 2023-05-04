import * as path from "path";

/** @type { import('@storybook/vue3-webpack5').StorybookConfig } */
const config = {
  stories: ['../templates/**/*.stories.mdx', '../templates/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: 'storybook-addon-sass-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
        loadSassAfterPostCSS: true,
        rule: {
          test: /\.(sa|sc)ss$/,
        },
      },
    },
  ],
  framework: {
    name: "@storybook/vue3-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },

  webpackFinal: async (config) => {
    config.module.rules = [
      ...config.module.rules,
      {
        test: /.twig$/,
        oneOf: [
          {
            resourceQuery: /raw/,
            loader: 'raw-loader',
          },
          {
            exclude: /\.(s?(a?|c)ss|js|html)$/,
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ];
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './../assets'),
      '@root': path.resolve(__dirname, './../'),
      '@templates': path.resolve(__dirname, './../templates/components'),
      '@styles': path.resolve(__dirname, './../assets/styles'),
    };
    return config;
  },
};
export default config;
