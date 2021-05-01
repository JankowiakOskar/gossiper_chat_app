const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
	name: {
		type: String,
		maxlength: 20,
		required: true,
	},
	password: String,
	createdBy: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
		maxlength: 120,
	},
	tags: {
		type: [String],
		maxlength: 4,
	},
});

roomSchema.set("toJSON", {
	virtuals: true,
});

module.exports = mongoose.model("Room", roomSchema);
