module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.initConfig({
		sass: {
			dev: {
				options: {
					style: 'expanded', 
					sourcemap: true
				}, 
				files: [{
					expand: true,
					cwd: 'src/scss',
					src: ['*.scss'],
					dest: '../httpdocs/css',
					ext: '.css'
				}]
			}
		}
	})

	grunt.registerTask('default', ['sass:dev'])
}
