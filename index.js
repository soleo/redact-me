'use strict';

var objectAssign = require('object-assign');

// https://gist.github.com/nerdsrescueme/1237767
var EMAIL_REGEX = /<?[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+>?/;
var PHONE_US_REGEX = /(\(?(\d{3})\)?[- \.]?)?([^\d]\d{3})[- \.]?(\d{4})/;
var CREDIT_CARD_REGEX = /\b(?:4[0-9]{12}(?:[0-9]{3})?|5[12345][0-9]{14}|3[47][0-9]{13}|3(?:0[012345]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35[0-9]{3})[0-9]{11})\b/;
var SSN_REGEX = /([0-9]{3}[-]*[0-9]{2}[-]*[0-9]{4})/;
var IP_ADDR_REGEX = /((?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))/;

module.exports = function (str, opts) {
	opts = objectAssign({
		stripEmail: true,
		stripPhone: true,
		stripSSN: true,
		stripCreditCard: true,
		stripIpAddress: true,
		redactString: ''
	}, opts);

	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	// replace email address with a redact string
	if (opts.stripEmail) {
		str = str.replace(EMAIL_REGEX, opts.redactString);
	}

	// replace phone numbers with a redact string
	if (opts.stripPhone) {
		str = str.replace(PHONE_US_REGEX, opts.redactString);
	}

	if (opts.stripSSN) {
		str = str.replace(SSN_REGEX, opts.redactString);
	}

	if (opts.stripCreditCard) {
		str = str.replace(CREDIT_CARD_REGEX, opts.redactString);
	}

	if (opts.stripIpAddress) {
		str = str.replace(IP_ADDR_REGEX, opts.redactString);
	}

	return str;
};
