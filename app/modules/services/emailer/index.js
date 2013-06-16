/**
@fileOverview

@module emailer
@class emailer

@toc
*/

'use strict';

var dependency =require('../../../dependency.js');
var pathParts =dependency.buildPaths(__dirname, {});

// var EmailTemplates =require(pathParts.services+'email/emailTemplates/index.js');
var EmailMandrill =require(pathParts.services+'email/mandrill/emailMandrill.js');

var self;

/**
@param {Object} opts
*/
function Emailer(opts) {
	self =this;
}

/**
Uses the appropriately installed email method (i.e. email-templates, Mandrill 3rd party service) to send an email. This is just an abstraction function to pass through the appropriate email to the actual/appropriate module that will actually send the email. This allows keeping the email interface always the same to send an email and this then allows attaching various different email sending methods.
@toc 1.
@method send
@param {Object} opts
	@param {Object} emailParams
		@param {String} to
		@param {String} subject
	@param {String} [template]
	@param {Object} [templateParams]
@return NONE
*/
Emailer.prototype.send =function(opts) {
	EmailMandrill.send(opts);
};

module.exports = new Emailer({});