const mongoose = require('mongoose');
const { customAlphabet } = require('nanoid');
const nanoid = customAlphabet(
	'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
	8,
);

const ticketSchema = new mongoose.Schema(
	{
		user_id: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'user',
		},
		paid: { type: Boolean.apply, default: false },

		slug: { type: String, default: () => nanoid(), unique: true },

		event_id: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'event',
		},
		count: {
			type: Number,
		},
		paid: {
			type: Boolean,
			default: false,
		},
		details: [
			{
				priceName: String,
				priceAmount: Number,
				ticketCount: Number,
				ticketAmount: Number,
			},
		],
		transactions: [
			{
				type: mongoose.Schema.Types.ObjectId,
				required: true,
				ref: 'transaction',
			},
		],
	},
	{ timestamps: true },
);

module.exports = mongoose.model('ticket', ticketSchema);
