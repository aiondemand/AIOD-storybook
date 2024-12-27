/**
 * @data
 */

const gulp = require("gulp"),
			plumber = require("gulp-plumber"),
			sass = require("gulp-sass")(require("sass")),
			autoprefixer = require("gulp-autoprefixer"),
			minifyCss = require("gulp-clean-css"),
			babel = require("gulp-babel"),
			webpack = require("webpack"),
			webpackStream = require("webpack-stream"),
			uglify = require("gulp-uglify"),
			concat = require("gulp-concat"),
			browserSync = require("browser-sync").create(),
			dependents = require("gulp-dependents"),
			notifier = require("node-notifier");

const proxy = "localhost",
			port = 3000,
			src_assets_folder = "./assets/",
			node_modules_folder = "./node_modules/",
			dist_node_modules_folder = `${src_assets_folder}node_modules/`,
			node_dependencies = Object.keys(require("./package.json").dependencies || {}),
			toastImgPath = +`${src_assets_folder}/assets/img/loba-toast.png`;

const gulpMessages = (title, message) => {
	const notifyOptions = {
		title: title,
		message: message,
		icon: toastImgPath, // Absolute path (doesn't work on balloons)
		sound: false, // Only Notification Center or Windows Toasters
		wait: false, // Wait with callback, until user action is taken against notification
		timeout: 2,
	};

	return notifyOptions;
};

const notifyGulp = (done) => {
	notifier.notify(gulpMessages(`Gulp is running`, `Gulp is running at port ${port}!`));

	done();
};

const notifyCSS = (done) => {
	notifier.notify(gulpMessages("CSS Compiled", "CSS has been compiled and injected successfully!"));
	done();
};

const notifyJS = (done) => {
	notifier.notify(gulpMessages("Javascript Compiled", "JS has been compiled and reloaded successfully!"));
	done();
};

const notifyFinal = (done) => {
	notifier.notify(gulpMessages("Production Ready!", "Your assets are ready to be deployed to production!"));
	done();
};

// Inject app.js and main.css in php files
const transform = function (filepath) {
	if (filepath.slice(-2) == "js") {
		return '<script src="' + filepath + '" defer></script>';
	} else {
		return '<link rel="stylesheet" href="' + filepath + '">';
	}
};

const browsersync = (done) => {
	browserSync.init({
		host: proxy,
		proxy: proxy,
		port: port,
	});
	done();
};

const style = () => {
	return gulp
		.src([src_assets_folder + "css/main.scss"], {})
		.pipe(plumber())
		.pipe(dependents())
		.pipe(
			sass({
				sourceComments: true,
				outputStyle: "nested",
			})
		)
		.pipe(autoprefixer())
		.pipe(concat("main.css"))
		.pipe(gulp.dest(src_assets_folder + "css"))
		.pipe(browserSync.stream());
};

const styleFinal = () => {
	return gulp
		.src([src_assets_folder + "css/main.scss"], {})
		.pipe(plumber())
		.pipe(dependents())
		.pipe(
			sass({
				sourceComments: false,
				outputStyle: "compressed",
			})
		)
		.pipe(autoprefixer())
		.pipe(minifyCss())
		.pipe(concat("main.min.css"))
		.pipe(gulp.dest(src_assets_folder + "css"))
		.pipe(browserSync.stream());
};

const scripts = () => {
	return gulp
		.src([src_assets_folder + "js/main.js"])
		.pipe(plumber())
		.pipe(
			webpackStream({
				mode: "development",
				plugins: [
					new webpack.ProvidePlugin({
						$: "jquery",
						jQuery: "jquery",
						Popper: ["popper.js", "default"],
					}),
				],
				// optimization: {
				// 	splitChunks: { chunks: "all" },
				// },
				performance: {
					hints: false,
				},
				devtool: false,
			})
		)
		.pipe(
			babel({
				presets: ["@babel/env"],
			})
		)
		.pipe(concat("app.js"))
		.pipe(gulp.dest(src_assets_folder + "js"))
		.pipe(browserSync.stream());
};

const scriptsFinal = () => {
	return gulp
		.src([src_assets_folder + "js/main.js"])
		.pipe(plumber())
		.pipe(
			webpackStream({
				mode: "production",
				plugins: [
					new webpack.ProvidePlugin({
						$: "jquery",
						jQuery: "jquery",
						Popper: ["popper.js", "default"],
					}),
				],
				// optimization: {
				// 	splitChunks: { chunks: "all" },
				// },
				performance: {
					hints: false,
				},
				devtool: false,
			})
		)
		.pipe(
			babel({
				presets: ["@babel/env"],
			})
		)
		.pipe(concat("app.min.js"))
		.pipe(uglify())
		.pipe(gulp.dest(src_assets_folder + "js"))
		.pipe(browserSync.stream());
};

const vendor = () => {
	if (node_dependencies.length === 0) {
		return new Promise((resolve) => {
			console.log("No dependencies specified");
			resolve();
		});
	}

	return gulp
		.src(
			node_dependencies.map((dependency) => node_modules_folder + dependency + "/**/*.*"),
			{
				base: node_modules_folder,
			}
		)
		.pipe(gulp.dest(dist_node_modules_folder));
};

// Watch changes in files
const watchFiles = () => {
	const watchVendor = [];

	node_dependencies.forEach((dependency) => {
		watchVendor.push(node_modules_folder + dependency + "/**/*.*");
	});

	const watch = ["./**/*.php", `${src_assets_folder}css/**/*.scss`];
	const watchJS = ["./**/*.php", `${src_assets_folder}js/**/**.js`, `!${src_assets_folder}js/app.js`];

	gulp.watch(watch, devScss);
	gulp.watch(watchJS, dev);
	// gulp.watch(watchVendor, vendor);
};

// TASKS
const serve = browsersync;

const final = gulp.series(vendor, styleFinal, scriptsFinal, notifyFinal);
const devScss = gulp.series(style, notifyCSS);
const dev = gulp.series(scripts, notifyJS);
const watch = gulp.parallel(watchFiles, notifyGulp);
const defaults = gulp.series(gulp.parallel(watch, serve));

exports.default = defaults;
exports.final = final;