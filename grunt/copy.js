module.exports = {
    fonts: {
        nonull: true,
        files: [
            {src: "**", dest: "<%= package.directory %>assets/fonts", cwd: 'bower_components/bootstrap/fonts', expand : true},
            {src: "**", dest: "<%= package.directory %>assets/fonts", cwd: 'bower_components/font-awesome/fonts', expand : true}
        ]
    }
};