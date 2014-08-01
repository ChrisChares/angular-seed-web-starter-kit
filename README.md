# angular-seed-web-starter-kit

A child of:
[Web Starter Kit](http://developers.google.com/web/starter-kit) & [Angular Seed](https://github.com/angular/angular-seed)

This project is currently using Web Starter Kit v0.4.0

Wiredep is used so you don't have to manually add `<script>` tags for bower dependencies

A rudimentary deployment system for Heroku is included. 

### To use:

	git clone https://github.com/rafriki/angular-seed-web-starter-kit.git

	cd angular-seed-web-starter-kit

	# Install dependencies
	npm install

	# Build project
	gulp

#### To build:

	gulp

#### To start server:

	gulp serve

### To deploy to Heroku:

Build and serve the project locally in production mode:

	gulp serve:dist

Make sure everything looks good, then:

Assuming you're all commited, you have a Heroku account and the [Heroku Toolbox](https://toolbelt.heroku.com/).

	heroku create
	heroku config:set BUILDPACK_URL=https://github.com/timdp/heroku-buildpack-nodejs-gulp.git
	heroku config:set NODE_ENV=production
	git push heroku master
	heroku ps:scale web=1

Easy.