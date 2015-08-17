module.exports = function(grunt) {
    var gtx = require('gruntfile-gtx').wrap(grunt);

    gtx.loadAuto();

    var gruntConfig = require('./grunt');
    gruntConfig.package = require('./package.json');

    gtx.config(gruntConfig);

    // We need our bower components in order to develop
    gtx.alias('build:app', ['clean:components','bower-install-simple:dev','concat:components','uglify:components','recess:components','pleeease:custom','copy:fonts','jadephp:compile']);
    gtx.alias('build:files', ['jadephp:components','copy:fonts','recess:components','pleeease:custom','concat:components','uglify:components']);
    gtx.alias('build:js', ['concat:components','uglify:components']);
    gtx.alias('build:css', ['recess:components','pleeease:custom']);
    gtx.alias('build:html', ['jade:compile']);
    gtx.alias('build:php', ['jadephp:compile']);
    gtx.finalise();
}