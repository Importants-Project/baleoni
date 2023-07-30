module.exports = {
  apps: [
    {
        name: 'Baleoni',
        exec_mode: 'cluster',
        instances: '4', // Or a number of instances
        cwd:'./',
        script: './node_modules/nuxt/bin/nuxt.js',
        args: 'start',
        node_args: '--max_old_space_size=4096 --optimize_for_size',
        max_memory_restart: '5G'
    },
  ]
}
