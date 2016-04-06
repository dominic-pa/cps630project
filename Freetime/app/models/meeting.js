var mongoose = require('mongoose'); 
var MeetingSchema = mongoose.Schema({ 
		name: String, 
		startDay: String,
		endDay:String, 
		startTime:String, 
		endTime:String, 
		timeMin:String, 
		timeMax:String,
		meetingMembers:[String], 
		membersAccepted: [String], 
		group: String
}); 
module.exports = mongoose.model('Meeting', MeetingSchema);