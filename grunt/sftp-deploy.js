module.exports = {
    build: {
        auth: {
            host: 'host_ip',
            authKey: '.ftppass_key_name'
        },
        src: '<%= package.directory %>',
        dest: 'remote_project_folder',
        exclusions: ['<%= package.directory %>**/.idea','<%= package.directory %>**/.git'],
        serverSep: '/',
        progress: true
    }
}