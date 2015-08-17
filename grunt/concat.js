module.exports = {
    components:{
        src:[
            'bower_components/jquery/dist/jquery.js',
            'bower_components/bootstrap/dist/js/bootstrap.js',
            'js/custom.js'
        ],
        dest:'<%= package.directory %>assets/js/compiled.js'
    }
}