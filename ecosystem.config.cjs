module.exports = {
  apps: [
    {
      name: 'RoadPrice',
      exec_mode: 'fork',
      instances: 1,
      script: './.output/server/index.mjs',
      args: 'start',
      port: 3000
    }
  ]
}
