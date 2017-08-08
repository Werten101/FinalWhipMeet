var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MeetSchema = new Schema ({
		name: String,
		place: String,
		car: String,
		date: Date,
		time: String,
		type: String
});

module.exports = mongoose.model('Meet', MeetSchema);
