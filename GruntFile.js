module.exports = function(grunt) {
    var gtx = require('gruntfile-gtx').wrap(grunt);

    gtx.loadAuto();

    var gruntConfig = require('./grunt');
    gruntConfig.package = require('./package.json');

    gtx.config(gruntConfig);

    // We need our bower components in order to develop
    gtx.alias('build:app', ['clean:components','bower-install-simple:dev','recess:components','pleeease:custom',,'purifycss:compile','coffee:compile','concat:components','uglify:components','clean:js','clean:coffee','copy:fonts','jadephp:compile']);
    gtx.alias('build:files', ['jadephp:components','copy:fonts','recess:components','pleeease:custom','purifycss:compile','coffee:compile','concat:components','uglify:components','clean:js','clean:coffee']);
    gtx.alias('build:deploy', ['jadephp:compile','copy:fonts','recess:components','pleeease:custom','purifycss:compile','coffee:compile','concat:components','uglify:components','clean:js','clean:coffee', 'sftp-deploy:build']);
    gtx.alias('build:js', ['coffee:compile','concat:components','uglify:components','clean:coffee']);
    gtx.alias('build:css', ['recess:components','pleeease:custom','purifycss:compile']);
    gtx.alias('build:html', ['jade:compile']);
    gtx.alias('build:php', ['jadephp:compile']);
    gtx.finalise();
}