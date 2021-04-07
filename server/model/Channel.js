const mongoose = require("mongoose");

const channelSchema = new mongoose.Schema({
	name: {
		type: String,
		required,
	},
	private: {
		type: Boolean,
	},
});

const channelsSchema = new mongoose.Schema({
	channels: [channelSchema],
});
