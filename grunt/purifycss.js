module.exports = {
    compile: {
        src: ['<%= package.directory %>/*.html', '<%= package.directory %>/assets/js/compiled.js'],
        css: ['<%= package.directory %>assets/css/compiled.min.css'],
        dest: '<%= package.directory %>assets/css/compiled.min.css'
    }
}