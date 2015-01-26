module.exports = (grunt) ->

	grunt.initConfig
		pkg: grunt.file.readJSON("package.json")

		browserify:
			app:
				src: ["app/dev/**/*.coffee"]
				dest: "app/build/js/app.js"
				options:
					extensions: [".coffee"]
					transform: ["html2js-browserify", "coffeeify", "debowerify"]
					bundleOptions:
						debug: true
					watch: true

		sass:
			build:
				options:
					sourcemap: true
				files:
					"app/build/stylesheets/app.css": "app/dev/stylesheets/app.scss"

		connect:
			build:
				options:
					livereload: true
					port: 9000
					base: "app/build"
			release:
				options:
					livereload: true
					port: 9001
					base: "app/release"

		clean: 
			build:
				["app/build"]

		watch:
			build_js:
				files: [
					"app/build/js/app.js"
				]
				tasks: []
				options:
					livereload: true
			build_css:
				files: [
					"app/dev/**/*.scss"
				]
				tasks: ["sass:build"]
				options:
					livereload: true

		focus:
			build:
				include: ["build_js"]

		copy:
			main:
				expand:true
				cwd: 'app/dev/'
				src: '*.html'
				dest:'app/build'
			css:
				expand:true
				cwd: 'app/dev/stylesheets'
				src: '*.css'
				dest:'app/build/css'

		require('load-grunt-tasks')(grunt)

		grunt.registerTask "default", [
			"clean:build",
			"copy",
			"browserify:app",
			"sass:build",
			"connect:build",
			"focus:build"
		]