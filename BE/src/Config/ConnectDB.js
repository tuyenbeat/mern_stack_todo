const mongoose = require("mongoose");

const database = {
	connect: async () => {
		try {
			await mongoose.connect(process.env.URL_DB);
		} catch (error) {
			console.log("connect database fail", error);
		}
	},
};

module.exports = database;
