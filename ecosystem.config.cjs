module.exports = {
  apps: [
    {
      name: 'grandview-capital',
      script: 'node_modules/vinext/dist/cli.js',
      args: 'dev --host 0.0.0.0 --port 4000',
      env: {
        PORT: 4000,
        NODE_ENV: 'production',
      },
    },
  ],
};
