const {Schema,model} = require('mongoose');

const QuestionSchema = new Schema({
    category:{type:String,required:true},
    difficultyLevel:{type:String,required:true},
    question:{type:String,required:true},
    correctAnswer:{type:String,required:true},
    option1:{type:String,required:true},
    option2:{type:String,required:true},
    option3:{type:String,required:true},

    
})

module.exports = model("question",QuestionSchema);