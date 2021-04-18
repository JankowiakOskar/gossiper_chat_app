const createMessage = (text, sender = "") => {
	return {
		date: new Date(),
		sender,
		text,
	};
};

module.exports = { createMessage };
