module.exports = {
    compile: {
        expand: true,
        cwd: 'jade/templates/',
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