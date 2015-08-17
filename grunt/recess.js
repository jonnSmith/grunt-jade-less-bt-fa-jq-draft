module.exports = {
    components: {
        files: {
            '<%= package.directory %>assets/css/compiled.min.css': [
                'bower_components/bootstrap/dist/css/bootstrap.css',
                'bower_components/font-awesome/css/font-awesome.css',
                'less/theme.less'
            ]
        }
    },
    options: {
        compile: true,
        compress: true
    }
}