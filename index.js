'use strict';

var objectAssign = require('object-assign');

module.exports = function (str, opts) {
	opts = objectAssign({
		stripEmail: true,
		stripPhone: true,
		redactString: ''
	}, opts);

	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}
	const emailRegex = /\s?<?[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+>?\s?/;
	const phoneUSRegex = /\s?(\(?(\d{3})\)?[- \.]?)?(\d{3,})[- \.]?(\d{4})\s?/;
	// replace email address with a redact string
	if (opts.stripEmail) {
		str = str.replace(emailRegex, opts.redactString);
	}

	// replace phone numbers with a redact string
	if (opts.stripPhone && phoneUSRegex.test(str)) {
		str = str.replace(phoneUSRegex, opts.redactString);
	}

	return str;
};
