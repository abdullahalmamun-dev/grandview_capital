module.exports = {
  apps: [
    {
      name: 'grandview-capital',
      script: 'node_modules/vinext/dist/cli.js',
      args: 'dev',
      env: {
        PORT: 3005,
        NODE_ENV: 'production',
      },
    },
  ],
};
