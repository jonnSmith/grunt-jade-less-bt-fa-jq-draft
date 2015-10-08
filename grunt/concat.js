module.exports = {
    components:{
        src:[
            'bower_components/jquery/dist/jquery.js',
            'bower_components/bootstrap/dist/js/bootstrap.js',
            'compiled-js/coffee.js'
        ],
        dest:'<%= package.directory %>assets/js/compiled.js'
    }
}