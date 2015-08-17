module.exports = {
    custom: {
        options: {
            "minifier": {preserveHacks: true, removeAllComments: true},
            "mqpacker": true,
            "less": false
        },
        files: {
            '<%= package.directory %>assets/css/compiled.min.css' : '<%= package.directory %>assets/css/compiled.min.css'
        }
    }
}