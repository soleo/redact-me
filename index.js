'use strict';

var objectAssign = require('object-assign');

var EMAIL_REGEX = /\s?<?[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+>?\s?/;
var PHONE_US_REGEX = /\s?(\(?(\d{3})\)?[- \.]?)?(\d{3,})[- \.]?(\d{4})\s?/;

module.exports = function (str, opts) {
	opts = objectAssign({
		stripEmail: true,
		stripPhone: true,
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
	if (opts.stripPhone && PHONE_US_REGEX.test(str)) {
		str = str.replace(PHONE_US_REGEX, opts.redactString);
	}

	return str;
};
