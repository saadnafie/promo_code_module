const Voucher = require('../models/voucher');

const voucher_list = (req, res, next) => {
	//res.send({type: 'GET'});
	Voucher.find()
		.then((voucher) => {
			res.send(voucher);
		})
		.catch(next);
	};



	module.exports = {
		voucher_list
	}