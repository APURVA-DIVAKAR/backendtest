const {Schema,model} = require('mongoose');

	// {
	// 	"company": "Ellette",
	// 	"postedAt": "2021-03-30",
	// 	"city": "Gangtok",
	// 	"location": "American Samoa",
	// 	"role": "Frontend",
	// 	"level": "Junior",
	// 	"contract": "Full Time",
	// 	"position": " Backend Developer",
	// 	"language": "Java"
	// },

const JobSchema = new Schema({
    company:{type:String,required:true},
    postedAt:{type:String,required:true},
    city:{type:String,required:true},
    role:{type:String,required:true},
    level:{type:String,required:true},
    contract:{type:String,required:true},
    position:{type:String,required:true},
    language:{type:String,required:true},
	location:{type:String,required:true},
    
})

module.exports = model("job",JobSchema);

