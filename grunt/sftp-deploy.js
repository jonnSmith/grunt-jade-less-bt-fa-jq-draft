module.exports = {
    build: {
        auth: {
            host: '127.0.0.1',
            authKey: 'key'
        },
        src: '<%= package.directory %>',
        dest: '/var/www/vhosts/forumdaily.iskra.ua/public/wp-content/themes/forumdaily',
        exclusions: ['<%= package.directory %>**/.idea'],
        serverSep: '/',
        progress: true
    }
}