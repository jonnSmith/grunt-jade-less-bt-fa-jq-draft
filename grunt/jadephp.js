module.exports = {
    compile: {
        expand: true,
        cwd: 'jadephp/templates/',
        src: ['**/*.jade'],
        dest: '<%= package.directory %>',
        ext: '.html',
        options: {
            client: false,
            basedir: 'jadephp/',
            pretty: false
        }
    }
}