const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// create voucher Schema & model
const VoucherSchema = new Schema({
	customer_id:{
		type: Number,
		required: [true, 'customer_id field is required']
	},
	discount_type:{
		type: Number,
		required: [true, 'discount_type field is required']
	},
	discount_value:{
		type: Number,
		required: [true, 'discount_value field is required']
	},
	voucher_code:{
		type: Number,
		required: [true, 'voucher_code field is required']
	},
	expiration_date:{
		type: Date,
		required: [true, 'expiration_date field is required']
	},
	use_date:{
		type: Date,
	    default: null,
		required: [false, 'use_date field is not required']
	}
}, {timestamps: true});

const Voucher = mongoose.model('voucher', VoucherSchema);

module.exports = Voucher;