const mongoose = require("mongoose");

const database = {
	connect: async () => {
		try {
			await mongoose.connect(process.env.URL_DB);
			console.log("connect database success");
		} catch (error) {
			console.log("connect database fail", error);
		}
	},
};

module.exports = database;
