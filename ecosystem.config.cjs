module.exports = {
  apps: [
    {
      name: 'bbbot',
      script: './dist/index.cjs',
      cwd: __dirname,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
