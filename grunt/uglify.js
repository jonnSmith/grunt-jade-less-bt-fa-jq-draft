module.exports = {
    components: {
        src:[
            '<%= package.directory %>assets/js/compiled.js'
        ],
        dest:'<%= package.directory %>assets/js/compiled.min.js'
    }
}