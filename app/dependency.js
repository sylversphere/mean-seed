/**
NOTE: this depends on hardcoding in the paths for this.config		//@todo - include in config json? then use global.cfgJson here?

This mimics dependency injection for node.js 'require' by handling path prefixes so paths to require modules don't have to be hardcoded into each file. This allows changing the file structure of the application later and then only needing to make changes in ONE place to update (rather than in EACH file that require's a module that was moved).

@toc
1. buildPaths

@module dependency
- hardcoding in this.config to this file

@toc
*/

'use strict';

var path =require('path');
var lodash = require('lodash');

function Dependency(options) {
	//hardcoded
	this.config ={
		rootDir: 'app'+path.sep,
		paths: {
			modules: path.sep+'modules',
			controllers: path.sep+'modules'+path.sep+'controllers',
			services: path.sep+'modules'+path.sep+'services',
			routes: path.sep+'routes'
		}
	};
	//end: hardcoded
	var self =this;
}

/**
Sets up paths for require from the current directory
@toc 1.
@method buildPaths
@param {Object} params
	@param {String} dirname The dirname from the file to build the 'require' path from
@return {Object} Paths to use for 'require' (instead of using "../../", etc. and having to know how many "../" to use)
*/
Dependency.prototype.buildPaths =function(dirname, params) {
	var self =this;
	var paths ={};
	var basePath =path.relative(dirname, self.config.rootDir);
	var xx;
	for(xx in this.config.paths) {
		paths[xx] =basePath+this.config.paths[xx]+'/';		//add trailing slash
	}
	return paths;
};

module.exports = new Dependency({});