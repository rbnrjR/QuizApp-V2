const mongoose = require("mongoose"),
	    Schema=mongoose.Schema;


var quizSchema=new Schema({
    topic:String,
    subtopic:String,
    hostedBy:String,
		topicImgURL:String,
    date:Date,
    startTime:Date,
    endTime:Date,
    questions:[{question:String,options:[String],correctoption:String}],
		participants:[{userId:String,score:Number}]
});


var quiz=mongoose.model("quiz",quizSchema);

module.exports=quiz;
