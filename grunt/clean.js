module.exports = {
    components: ['bower_components/*'],
    js: ["<%= package.directory %>assets/js/*.js", "!<%= package.directory %>assets/js/*.min.js"],
    options: { force: true }
};