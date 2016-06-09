var _ = require('underscore');

module.exports = {
	index: function(params, callback) {
		this.app.set('title', 'Jewellery Collection');
		callback();
	}

};
