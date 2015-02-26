module.exports = {
    components: {
        files: {
            'public_html/css/compiled.min.css': [
                'bower_components/bootstrap/dist/css/bootstrap.css',
                'bower_components/font-awesome/css/font-awesome.css',
                'less/styles.less'
            ]
        }
    },
    options: {
        compile: true,
        compress: false
    }
}