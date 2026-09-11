module.exports = {
  apps: [
    {
      name: 'grandview-capital',
      script: 'node_modules/vinext/dist/cli.js',
      args: 'dev --host 0.0.0.0 --port 3005',
      env: {
        PORT: 3005,
        NODE_ENV: 'production',
      },
    },
  ],
};
