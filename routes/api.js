const express = require('express');
const voucherController = require('../controllers/voucherController');
const router = express.Router();

const _ = require('lodash');


router.get('/voucher', voucherController.voucher_list);
/*router.get('/voucher', (req, res, next) => {
	//res.send({type: 'GET'});
	Voucher.find().then((voucher) => {
			res.send(voucher);
		}).catch(next);
});*/

router.post('/voucher', (req, res, next) => {
	console.log(req.body);
	
	var voucher = new Voucher(req.body);
	voucher.voucher_code = _.random(99999, 9999999);
	voucher.save().then((voucher) => {
			res.send(voucher);
		}).catch(next);
});
		/*.catch((err) =>{
			console.log(err);
			res.send(err);
		});*/
	/*Voucher.create(req.body)
		.then((voucher) =>{
			res.send(voucher);
		})
		.catch((err) =>{
			console.log(err);
		});*/

	/*res.send({
		type: 'POST',
		customer_id: req.body.customer_id,
    	discount_type: req.body.discount_type,
    	discount_value: req.body.discount_value,
    	expiration_date: req.body.expiration_date
	});
});*/

router.put('/voucher/:id', (req, res, next) => {
	//res.send({type: 'PUT'});
	Voucher.findByIdAndUpdate({
		_id:req.params.id
	}, req.body).then(() => {
		voucher.findone({_id:req.params.id}).then((voucher) => {
			res.send(voucher);
		});
	});
});

router.delete('/voucher/:id', (req, res, next) => {
	//res.send({type: 'DELETE'});
	console.log(req.params.id);
	Voucher.findByIdAndRemove({
		_id:req.params.id
	}).then((voucher) => {
		res.send(voucher);
	})
});


module.exports = router;








