module.exports = {
    fonts: {
        nonull: true,
        files: [
            {src: "**", dest: "public_html/fonts", cwd: 'bower_components/bootstrap/fonts', expand : true},
            {src: "**", dest: "public_html/fonts", cwd: 'bower_components/font-awesome/fonts', expand : true}
        ]
    }
};