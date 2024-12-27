# Starter Template for Web Development
This Gulp Starter Kit provides a simple way of setting up a modern web development environment.
Here is a list of the current features:
	- Compile HTML files and auto-reloading
	- Compile CSS preprocessor code Sass to CSS and auto-reloading
	- Autoprefix and minify CSS
	- Import dependencies into your application with ES6 modules
	- Compile ES6+ to ES5, concatenate JS files and minify code
	- Compress images
	- Spin up local dev server at `http://localhost:3000` including auto-reloading

## Required
- [Node.js] (v10.16.3 or greater). https://nodejs.org/en/download/  (test with node version v12.18.3 and v15.8.0)
	Test: run ` node -v ` in the terminal
- [Gulp 4](https://gulpjs.com/)
	Test: run `gulp -v ` in the terminal. If it doesn't exist task runner `npm install -g gulp`
-	Gulp(V4.0.2) – task runner `npm install -g gulp`
	Test: run `gulp -v ` in the terminal

## Installing:
1.	` npm install`  installs packages listed in the package.json. Packages are installed in the node_modules folder. 
2.	To start project run ` gulp ` task runs local BrowserSync server and watch for file changes. 
3.	Your project can view on this URL: http://localhost:3000 . You can change inside the gulpfile.js ` port: 3000`.
4.	Run `gulp final`. Recreate all of your complied files minified.

## Folder Structure:
- `node_modules` Installed Front-end dependencies.
- `/` Folder contains all of your core files. 
- `assets/` Sass files, JS files, images, videos and fonts.
- `html/` HTML layouts.
- `gulpfile.babel.js` Task function definitions.
- `package.json` Front-end dependencies.

## Scss Folder Structure:
- `assets/css/modules` Reusable Blocks Of Code .
- `assets/css/layout` Specific Page Layout And Non-Reusable Style.
- `assets/css/main.scss` This is where you will import your custom component files.

### How can I load dependencies inside my application?
ES6 modules are supported by this Gulp Starter Kit.
Just install your dependencies and import them like so:

Import modules Bootstrap
- https://getbootstrap.com/docs/4.0/getting-started/webpack/

```main.js
import Swiper from "swiper";
import 'bootstrap/js/dist/dropdown';
```


## Resources:
- [Gulp](https://gulpjs.org/getting-started)
- [Webpack](https://webpack.js.org/)
- [JQuery](https://jquery.com/)
- [JQuery Validation](https://jqueryvalidation.org/)
- [Sass](https://sass-lang.com/)
- [Bootstrap](https://getbootstrap.com/)